function evaluateAI() {

  const problem = document.getElementById("problem").value;
  const task = document.getElementById("task").value;

  document.getElementById("result").innerText =
    "Problem: " + problem + " | Task: " + task;
}
