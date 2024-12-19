// Liste des jours fériés civils en 2025
const joursFeriesCivils = [
    { jour: 1, mois: 1, nom: "Nouvel An" },
    { jour: 11, mois: 1, nom: "Manifeste de l'Indépendance" },
    { jour: 14, mois: 1, nom: "Nouvel An Amazigh" },
    { jour: 1, mois: 5, nom: "Fête du Travail" },
    { jour: 30, mois: 7, nom: "Fête du Trône" },
    { jour: 14, mois: 8, nom: "Anniversaire de la Récupération de Oued Eddahab" },
    { jour: 20, mois: 8, nom: "Révolution du Roi et du Peuple" },
    { jour: 21, mois: 8, nom: "Fête de la Jeunesse" },
    { jour: 6, mois: 11, nom: "Anniversaire de la Marche Verte" },
    { jour: 18, mois: 11, nom: "Fête de l'Indépendance" }
];

// Liste des jours fériés religieux en 2025
const joursFeriesReligieux = [
    { jour: 31, mois: 3, nom: "Aïd Al Fitr" },
    { jour: 6, mois: 6, nom: "Aïd Al Adha" },
    { jour: 27, mois: 6, nom: "1er Moharram" },
    { jour: 5, mois: 9, nom: "Aïd Al Mawlid" }
];

// Fonction pour afficher les jours fériés d'un mois
function afficherJoursFeries(mois) {
    let joursFeries = [];
    
    // Fusion des jours fériés civils et religieux
    let tousLesJoursFeries = [...joursFeriesCivils, ...joursFeriesReligieux];
    
    // Filtrer les jours fériés du mois sélectionné
    tousLesJoursFeries.forEach(jourFerie => {
        if (jourFerie.mois === mois) {
            joursFeries.push(`${jourFerie.jour} - ${jourFerie.nom}`);
        }
    });

    if (joursFeries.length === 0) {
        joursFeries.push("Aucun jour férié pour ce mois.");
    }

    // Afficher les résultats dans la div "resultat"
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = `<h2>Jours Fériés de ${getMoisNom(mois)} 2025</h2><ul>`;
    joursFeries.forEach(jour => {
        resultatDiv.innerHTML += `<li>${jour}</li>`;
    });
    resultatDiv.innerHTML += `</ul>`;
}

// Fonction pour obtenir le nom du mois
function getMoisNom(mois) {
    const moisNoms = [
        "Janvier" , "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    return moisNoms[mois - 1];
}
