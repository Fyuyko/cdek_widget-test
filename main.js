import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
    deliveryVariationChange();
});

function deliveryVariationChange() {
    const buttons = document.querySelectorAll("[data-delivery]");
    const inputs = document.querySelectorAll("[data-input]");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            inputs.forEach(input => {
                input.classList.remove("active");
               if (input.dataset.input === button.dataset.delivery) {
                   input.classList.add("active");
               }
            });
        });
    });
}