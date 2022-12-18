const ListeMajoritePrenoms91 = tousLesPrenoms91.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms91Simple = ListeMajoritePrenoms91.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances91 = ListeMajoritePrenoms91.map((item) => item.nombre) // mettre à côté de "data:"
let labels91 = ListeMajoritePrenoms91Simple.map((item) => item.preusuel) // mettre à côté de ""

const data91 = {
    labels: labels91,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances91,
        fill: false,
        borderColor: 'rgb(91, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config91 = {
    type: 'line',
    data: data91,
};


const ctx91 = document.getElementById('myChart91');

new Chart(ctx91, config91); 