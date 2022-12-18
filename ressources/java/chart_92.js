const ListeMajoritePrenoms92 = tousLesPrenoms92.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms92Simple = ListeMajoritePrenoms92.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances92 = ListeMajoritePrenoms92.map((item) => item.nombre) // mettre à côté de "data:"
let labels92 = ListeMajoritePrenoms92Simple.map((item) => item.preusuel) // mettre à côté de ""

const data92 = {
    labels: labels92,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances92,
        fill: false,
        borderColor: 'rgb(92, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config92 = {
    type: 'line',
    data: data92,
};


const ctx92 = document.getElementById('myChart92');

new Chart(ctx92, config92); 