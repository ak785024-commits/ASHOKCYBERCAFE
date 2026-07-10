document.addEventListener("DOMContentLoaded", function () {
    console.log("Ashok Cyber Cafe Website Loaded Successfully!");

    const callBtn = document.querySelector(".btn");

    if (callBtn) {
        callBtn.addEventListener("click", function () {
            window.location.href = "tel:7654476346";
        });
    }
});
