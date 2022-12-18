const ListeMajoritePrenoms95 = tousLesPrenoms95.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms95Simple = ListeMajoritePrenoms95.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances95 = ListeMajoritePrenoms95.map((item) => item.nombre) // mettre à côté de "data:"
let labels95 = ListeMajoritePrenoms95Simple.map((item) => item.preusuel) // mettre à côté de ""

const data95 = {
    labels: labels95,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances95,
        fill: false,
        borderColor: 'rgb(95, 192, 192)',
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