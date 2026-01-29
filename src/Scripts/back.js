const backBtn = document.getElementById("back");

if (backBtn) {
    backBtn.addEventListener("click", () => {
        if (document.referrer !== "") {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }
    });
}