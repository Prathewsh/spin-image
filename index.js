export default function spinImage(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const speed = options.speed || "2s";

  const styleId = "spin-image-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  element.style.animation = `spin ${speed} linear infinite`;
  element.style.display = "inline-block";
}
