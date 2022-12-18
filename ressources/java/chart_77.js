const ListeMajoritePrenoms77 = tousLesPrenoms77.filter((item) => item.nombre > 50)
const ListeMajoritePrenoms77Simple = ListeMajoritePrenoms77.map((item) => {
    return {
        preusuel: item.preusuel,
        sexe: item.sexe,
        nombre: item.nombre
    }
})
let nombreNaissances77 = ListeMajoritePrenoms77.map((item) => item.nombre) // mettre à côté de "data:"
let labels77 = ListeMajoritePrenoms77Simple.map((item) => item.preusuel) // mettre à côté de ""

const data77 = {
    labels: labels77,
    datasets: [{
        label: 'Nombre de naissances',
        data: nombreNaissances77,
        fill: false,
        borderColor: 'rgb(77, 192, 192)',
        tension: 0.1,
        backgroundColor: "blue"
    }]
};

const config77 = {
    type: 'line',
    data: data77,
};


const ctx77 = document.getElementById('myChart77');

new Chart(ctx77, config77); 