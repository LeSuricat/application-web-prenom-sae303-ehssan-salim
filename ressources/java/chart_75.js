const ListeMajoritePrenoms75 = tousLesPrenoms75.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms75Simple = ListeMajoritePrenoms75.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances75 = ListeMajoritePrenoms75.map((item) => item.nombre) // mettre à côté de "data:"
let labels75 = ListeMajoritePrenoms75Simple.map((item) => item.preusuel) // mettre à côté de ""

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