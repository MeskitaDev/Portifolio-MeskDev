/* =========================================================
   CURSOR: círculo que segue o mouse com um pequeno atraso
   ========================================================= */

const cursor = document.querySelector(".cursor");

// só ativa em aparelhos com mouse (no celular não existe cursor)
if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let mouseX = 0, mouseY = 0;   // onde o mouse está
    let x = 0, y = 0;             // onde o círculo está

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.classList.add("cursor-visivel");
    });

    // esconde o círculo quando o mouse sai da janela
    document.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-visivel");
    });

    // a cada quadro, o círculo anda 15% da distância até o mouse:
    // efeito de "atraso" suave
    function animar() {
        x += (mouseX - x) * 0.15;
        y += (mouseY - y) * 0.15;
        cursor.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animar);
    }
    animar();

    // o círculo cresce em cima de links, botões, cards e campos
    const alvos = "a, button, .card, input, textarea";

    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(alvos)) cursor.classList.add("cursor-grande");
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(alvos)) cursor.classList.remove("cursor-grande");
    });
}
