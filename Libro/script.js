document.addEventListener("DOMContentLoaded", () => {
    const cover = document.getElementById("bookCover");
    const book = document.getElementById("book");
    const openBookBtn = document.getElementById("openBookBtn");
    const closeBookBtn = document.getElementById("closeBookBtn");

    const pages = document.querySelectorAll(".page");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const goToBtn = document.getElementById("goToBtn");
    const pageInput = document.getElementById("pageInput");

    let currentPage = 0;

    // Mostrar portada primero
    cover.style.display = "flex";
    book.style.display = "none";

    // Abrir libro
    openBookBtn.addEventListener("click", () => {
        cover.style.display = "none";
        book.style.display = "block";
        currentPage = 0;
        showPage(currentPage);
    });

    // Cerrar libro
    closeBookBtn.addEventListener("click", () => {
        book.style.display = "none";
        cover.style.display = "flex";
        currentPage = 0;
        pages.forEach(p => p.classList.remove("active"));
    });

    // Función para mostrar página
    function showPage(index) {
        pages.forEach(p => p.classList.remove("active"));
        pages[index].classList.add("active");
    }

    // Página siguiente
    nextBtn.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Página anterior
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Ir a página específica
    goToBtn.addEventListener("click", () => {
        const pageNumber = parseInt(pageInput.value);
        if (pageNumber >= 1 && pageNumber <= pages.length) {
            currentPage = pageNumber - 1;
            showPage(currentPage);
        } else {
            alert("Esa página no existe 💭");
        }
    });
});
