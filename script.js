console.log("JS FILE LOADED");

function evaluateAI() {

  const problem = document.getElementById("problem").value;
  const task = document.getElementById("task").value;
  const workflow = document.getElementById("workflow").value;
  const outputType = document.getElementById("outputType").value;
  const error = document.getElementById("error").value;
  const context = document.getElementById("context").value;

  const outputText = `
Business Problem: ${problem}

Task: ${task}

Workflow: ${workflow}

Output Type: ${outputType}

Error Tolerance: ${error}

Context Dependency: ${context}
`;

  document.getElementById("result").innerText = outputText;
}
