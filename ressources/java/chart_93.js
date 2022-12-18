const ListeMajoritePrenoms93 = tousLesPrenoms93.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms93Simple = ListeMajoritePrenoms93.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances93 = ListeMajoritePrenoms93.map((item) => item.nombre) // mettre à côté de "data:"
let labels93 = ListeMajoritePrenoms93Simple.map((item) => item.preusuel) // mettre à côté de ""

const data93 = {
    labels: labels93,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances93,
        fill: false,
        borderColor: 'rgb(93, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config93 = {
    type: 'line',
    data: data93,
};


const ctx93 = document.getElementById('myChart93');

new Chart(ctx93, config93); 