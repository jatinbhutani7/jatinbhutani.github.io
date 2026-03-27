export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { problem, task, workflow, outputType, error, context } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: `
You are a strategy consultant.

Evaluate this AI use case:

Problem: ${problem}
Task: ${task}
Workflow: ${workflow}
Output Type: ${outputType}
Error Tolerance: ${error}
Context Dependency: ${context}

Give structured output:
1. AI Fit
2. Where AI Adds Value
3. Where AI Fails
4. Key Risks
5. Implementation Complexity
6. Recommendation
`
      })
    });

    const data = await response.json();
    console.log("OPENAI RESPONSE:", JSON.stringify(data, null, 2));

const resultText =
  data.output?.[0]?.content?.[0]?.text || "No response generated";

return res.status(200).json({
  result: resultText
});

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({
      error: err.message || "Internal server error"
    });
  }
}
