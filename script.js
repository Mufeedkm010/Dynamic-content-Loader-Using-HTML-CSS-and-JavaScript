document.addEventListener("DOMContentLoaded", function() {
    const jsonData = [
        { "title": "Item 1", "description": "This is the first item." },
        { "title": "Item 2", "description": "This is the second item." },
        { "title": "Item 3", "description": "This is the third item." },
        { "title": "Item 4", "description": "This is the fourth item." },
        { "title": "Item 5", "description": "This is the fifth item." }
    ];

    const contentDiv = document.getElementById("content");
    const loadButton = document.getElementById("loadData");
    const searchInput = document.getElementById("search");

    if (!contentDiv || !loadButton || !searchInput) {
        console.error("One or more elements are missing from the HTML.");
        return;
    }

    function displayItems(items) {
        contentDiv.innerHTML = "";
        items.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            contentDiv.appendChild(div);
        });
    }

    loadButton.addEventListener("click", function() {
        displayItems(jsonData);
    });

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredItems = jsonData.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
        displayItems(filteredItems);
    });
});
