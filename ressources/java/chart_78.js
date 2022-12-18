const ListeMajoritePrenoms78 = tousLesPrenoms78.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms78Simple = ListeMajoritePrenoms78.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances78 = ListeMajoritePrenoms78.map((item) => item.nombre) // mettre à côté de "data:"
let labels78 = ListeMajoritePrenoms78Simple.map((item) => item.preusuel) // mettre à côté de ""

const data78 = {
    labels: labels78,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances78,
        fill: false,
        borderColor: 'rgb(78, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config78 = {
    type: 'line',
    data: data78,
};


const ctx78 = document.getElementById('myChart78');

new Chart(ctx78, config78); 