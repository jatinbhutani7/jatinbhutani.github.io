function evaluateAI() {

  const problem = document.getElementById("problem").value;
  const task = document.getElementById("task").value;
  const workflow = document.getElementById("workflow").value;
  const outputType = document.getElementById("outputType").value;
  const error = document.getElementById("error").value;
  const context = document.getElementById("context").value;

  document.getElementById("result").innerText =
    `Problem: ${problem}
Task: ${task}
Workflow: ${workflow}
Output: ${outputType}
Error: ${error}
Context: ${context}`;
}
