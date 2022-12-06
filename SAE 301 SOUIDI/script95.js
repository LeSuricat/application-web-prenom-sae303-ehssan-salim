/* 
   pour faire les graphiques, une comparaison de deux prénom par exemple, aller dans le fichier excel (.xlsx)
   puis récupérer les deux lignes qui concerne les deux prénoms (si comparaison entre plus que deux prénom, prendre autant de lignes
   que de prénom que l'on veut comparer) puis les mettres dans un nouveau fichier excel puis exporter en .xlsx . 
   Lié ce fichier ensuite dans vs code 
*/

/*
Idées pour les graphiques :
- Comparaissons d'un ou plusieurs prénoms sur 1 an
- Evolution d'un prénom 
*/
/*
        

        let listePrenoms = tousLesPrenoms.map((item) => item.nombre) // mettre à côté de "data:"
        let labels = tousLesPrenoms.map((item) => item.preusuel) // mettre à côté de ""
*/

let listePrenomsChoisis95 = ["HUGO", "SAFA", "SASHA", "CHARLES", "JEAN", "ARMAND", "BAPTISTE", "NICOLAS"]
let listPrenomsSelectionnes95 = tousLesPrenoms95.filter((item) => listePrenomsChoisis95.includes(item.preusuel))
let nombreNaissances95 = tousLesPrenoms95.map((item) => item.nombre) // mettre à côté de "data:"
let labels95 = listPrenomsSelectionnes95.map((item) => item.preusuel) // mettre à côté de ""

const data95 = {
    labels: labels95,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances95,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config95 = {
    type: 'line',
    data: data95,
};


const ctx95 = document.getElementById('myChart95');

new Chart(ctx95, config95); 