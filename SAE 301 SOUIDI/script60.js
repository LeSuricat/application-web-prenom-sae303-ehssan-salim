let listePrenomsChoisis60 = ["HUGO", "SAFA", "SASHA", "CHARLES", "JEAN", "ARMAND", "BAPTISTE", "NICOLAS","ADRIEN"]
let listPrenomsSelectionnes60 = tousLesPrenoms60.filter((item) => listePrenomsChoisis60.includes(item.preusuel))
let nombreNaissances60 = tousLesPrenoms60.map((item) => item.nombre) // mettre à côté de "data:"
let labels60 = listPrenomsSelectionnes60.map((item) => item.preusuel) // mettre à côté de ""

const data60 = {
    labels: labels60,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances60,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config60 = {
    type: 'line',
    data: data60,
};


const ctx60 = document.getElementById('MyChart60');

new Chart(ctx60, config60); 