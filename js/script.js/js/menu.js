/*=========================================
  LAS CELIAS
  MENU.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // MAIN ACCORDIONS
    // ======================================

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {

        const header = accordion.querySelector(".accordion-header");
        const content = accordion.querySelector(".accordion-content");

        header.addEventListener("click", () => {

            const isOpen = accordion.classList.contains("active");

            // Cerrar todos los acordeones
            accordions.forEach((item) => {

                item.classList.remove("active");

                item.querySelector(".accordion-content").style.maxHeight = null;

            });

            // Abrir el seleccionado
            if (!isOpen) {

                accordion.classList.add("active");

                content.style.maxHeight = content.scrollHeight + "px";

            }

        });

    });

    // ======================================
    // SUB ACCORDIONS
    // ======================================

    const subHeaders = document.querySelectorAll(".sub-header");

    subHeaders.forEach((header) => {

        header.addEventListener("click", () => {

            const subAccordion = header.parentElement;
            const content = subAccordion.querySelector(".sub-content");

            const isOpen = subAccordion.classList.contains("active");

            // Cerrar los hermanos
            const brothers = subAccordion.parentElement.querySelectorAll(".sub-accordion");

            brothers.forEach((item) => {

                item.classList.remove("active");

                const body = item.querySelector(".sub-content");

                if (body) {

                    body.style.maxHeight = null;

                }

            });

            // Abrir el seleccionado
            if (!isOpen) {

                subAccordion.classList.add("active");

                if (content) {

                    content.style.maxHeight = content.scrollHeight + "px";

                }

            }

            // Recalcular altura del acordeón principal
            const parentAccordion = header.closest(".accordion");

            if (parentAccordion.classList.contains("active")) {

                const parentContent = parentAccordion.querySelector(".accordion-content");

                setTimeout(() => {

                    parentContent.style.maxHeight = parentContent.scrollHeight + "px";

                }, 250);

            }

        });

    });

});