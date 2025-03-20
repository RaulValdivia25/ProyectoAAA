// Crear elementos
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";

// Crear un contenedor
const container = document.createElement("div");
container.style.padding = "20px";
container.style.backgroundColor = "#f0f0f0";
document.body.appendChild(container);

// Crear un título
const title = document.createElement("h1");
title.textContent = "Bienvenido a mi página con JavaScript";
container.appendChild(title);

// Crear un párrafo
const paragraph = document.createElement("p");
paragraph.textContent = "Esta página ha sido generada completamente con JavaScript.";
container.appendChild(paragraph);

// Crear un botón
const button = document.createElement("button");
button.textContent = "Haz clic aquí";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.border = "none";
button.style.backgroundColor = "#28a745";
button.style.color = "white";
button.style.cursor = "pointer";
button.onmouseover = () => (button.style.backgroundColor = "#218838");
button.onmouseleave = () => (button.style.backgroundColor = "#28a745");
container.appendChild(button);

// Evento de clic en el botón
button.addEventListener("click", () => {
    alert("¡Has hecho clic en el botón!");
});