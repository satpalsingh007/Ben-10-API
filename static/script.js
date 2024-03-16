document.querySelector(".about").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("popup").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
document.getElementById("checkDatabase").addEventListener("click", function () {
    const inputName = document.getElementById("searchInput").value;
    if (inputName.trim() !== "") {
        const searchUrl = "/aliens/name/" + encodeURIComponent(inputName);
        window.open(searchUrl, "_blank"); // Open link in a new window/tab
    } else {
        alert("Please enter a DNA name before checking the database.");
    }
});
