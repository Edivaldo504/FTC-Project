// ANIMAÇÃO SCROLL
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

// COPIAR CONTRATO
function copyContract() {
  const text = document.getElementById("contract").innerText;
  navigator.clipboard.writeText(text);
  alert("Contract copied!");
}