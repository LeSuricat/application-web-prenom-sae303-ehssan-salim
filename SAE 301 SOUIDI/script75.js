let listePrenomsChoisis75 = ["HUGO", "SAFA", "SASHA", "CHARLES", "JEAN", "ARMAND", "BAPTISTE", "NICOLAS", "ADRIEN"]
let listPrenomsSelectionnes75 = tousLesPrenoms75.filter((item) => listePrenomsChoisis75.includes(item.preusuel))
let nombreNaissances75 = tousLesPrenoms75.map((item) => item.nombre) // mettre à côté de "data:"
let labels75 = listPrenomsSelectionnes75.map((item) => item.preusuel) // mettre à côté de ""

const data75 = {
    labels: labels75,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances75,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config75 = {
    type: 'line',
    data: data75,
};


const ctx75 = document.getElementById('myChart75');

new Chart(ctx75, config75); 