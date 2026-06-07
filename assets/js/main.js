document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startBtn");

    if (!btn) {
        console.error("Button nicht gefunden!");
        return;
    }

    btn.addEventListener("click", () => {
        document.body.classList.remove("not-loaded");
        btn.style.display = "none";
    });
});