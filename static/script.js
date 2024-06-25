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

document.getElementById("show-card").addEventListener("click", function () {
    const inputName = document.getElementById("searchInput").value;
    if (inputName.trim() !== "") {
        const searchUrl = "/aliens/name/" + encodeURIComponent(inputName);
        // Make AJAX request to fetch data from the server
        fetch(searchUrl)
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.imageUrl;
                const name = data.name;
                const description = data.description;
                // Update the HTML content of the popup to display the information
                document.getElementById(
                    "card"
                ).innerHTML = `<div class="card-container">
                    <img src="${imageUrl}" alt="${name}" class="popup-card" />
                    <h2>${name}</h2>
                    <p>${description}</p><div>
                `;

                // Display the card
                document.getElementById("card").style.display = "flex";
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                alert("Error fetching data. Please try again later.");
            });
    } else {
        alert("Please enter a DNA name before checking the database.");
    }
    document.getElementById("card").addEventListener("click", function (event) {
        if (event.target === this) {
            this.style.display = "none";
        }
    });
});
