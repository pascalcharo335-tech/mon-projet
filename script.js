 let livres = [
            { titre: "JavaScript", auteur: "Paul" },
            { titre: "HTML", auteur: "Jean" },
            { titre: "CSS", auteur: "Marie" }
        ];

        function afficherLivres() {
            let liste = document.getElementById("listelivres");
            liste.innerHTML = "";
            livres.forEach(function (livre, index) {
                liste.innerHTML += `<div class="livre">
          <p>Titre : ${livre.titre}</p>
          <p>Auteur : ${livre.auteur}</p>
          <button onclick="supprimerLivre(${index})">Supprimer</button>
        </div>`;
            });
        }

        function supprimerLivre(index) {
            let confirmation = confirm("Voulez-vous supprimer ce livre ?");
            if (confirmation) {
                livres.splice(index, 1);
                afficherLivres();
            }
            console.log(livres);
        }

        afficherLivres();