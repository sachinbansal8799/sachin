
document.addEventListener('DOMContentLoaded', () => {
  const roles = ["Digital Marketer", "Photographer", "Video Editor", "PR Coordinator"];
  let i = 0, j = 0;
  const target = document.getElementById("typing");
  function type() {
    if (j < roles[i].length) {
      target.textContent += roles[i].charAt(j++);
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        j = 0;
        target.textContent = "";
        i = (i + 1) % roles.length;
        type();
      }, 1500);
    }
  }
  if (target) type();
});
