var donnees = document.getElementById("manege");

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.articles.forEach(function(article) {
            var articleDiv = document.createElement("div");
            articleDiv.innerHTML = `
            <img src="${article.url}" width = "350px" height = "550px" alt="${article.nom}"/>
            <p>${article.nom}</p>
            <p>Prix : ${article.prix} €</p>
            <p>${article.designation}</p>
            `;
            donnees.appendChild(articleDiv);
          });
        })