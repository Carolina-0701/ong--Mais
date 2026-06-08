
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Gerenciamento do Menu Lateral Ativo e Ícones Preenchidos (icon-filled)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        // Se o link corresponder à página atual
        if (currentPath.includes(link.getAttribute("href"))) {
            // Aplica estilo de destaque do token do Tailwind
            link.classList.add("bg-primary-container", "text-on-primary-container");
            
            // Localiza o ícone dentro do link ativo e aplica o preenchimento customizado do CSS
            const icon = link.querySelector(".material-symbols-outlined");
            if (icon) {
                icon.classList.add("icon-filled");
            }
        }
    });

    // 2. Comportamento Utilitário para Tabelas de Planilha (Hover de Ações)
    const tableRows = document.querySelectorAll("tbody tr");
    tableRows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            const actionButtons = row.querySelector(".actions-cell"); // se houver classe de ações
            if (actionButtons) actionButtons.classList.remove("opacity-0");
        });
        row.addEventListener("mouseleave", () => {
            const actionButtons = row.querySelector(".actions-cell");
            if (actionButtons) actionButtons.classList.add("opacity-0");
        });
    });

    // 3. Sistema Simples para Modais (ex: Cadastrar Fornecedor, Novo Item)
    const openModalButtons = document.querySelectorAll("[data-open-modal]");
    const closeModalButtons = document.querySelectorAll("[data-close-modal]");
    
    openModalButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-open-modal");
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.remove("hidden", "pointer-events-none");
        });
    });

    closeModalButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal-container");
            if (modal) modal.classList.add("hidden", "pointer-events-none");
        });
    });
});