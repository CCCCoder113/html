document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  if (status) {
    status.textContent = "Served and rendering correctly";
  }

  const stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.textContent = `Loaded at ${new Date().toLocaleString()}`;
  }
});
