(() => {
const main = document.querySelector('main');
const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
        main.dataset.selected = button.innerText;
        iniciarTerco();
    }
});

const misteriosMap = {
    'Gozosos': ['Anunciação à Virgem Maria', 'Visita de Maria à sua prima Isabel', 'Nascimento de Nosso Senhor Jesus Cristo', 'Apresentação de Jesus ao templo', 'Jesus, que é perdido e reencontrado entre os doutores'],
    'Luminosos': ['Batismo de Jesus', 'Primeiro milagre de Jesus, transformando água em vinho', 'Anúncio do Reino de Deus e convite à conversão', 'Transfiguração de Jesus', 'Instituição da Eucaristia'],
    'Dolorosos': ['Agonia de Jesus no Horto das Oliveiras', 'A flagelação de Jesus Cristo', 'A coroação de espinhos', 'Jesus, que carrega a própria Cruz até o Calvário', 'A morte de Nosso Senhor Jesus Cristo'],
    'Gloriosos': ['Ressureição de Jesus', 'Ascenção de Jesus aos céus', 'Vinda do Espírito Santo sobre Maria e os apóstolos em Pentecostes', 'Assunção de Nossa Senhora', 'A coroação de Nossa Senhora como rainha dos céus e da Terra']
}

const ordinalMap = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];

let misterioAtual = 1;
let selectedMisterios;

const misterios = document.querySelector('.misterios');
function iniciarTerco() {
    misterios.innerText = `Mistérios ${main.dataset.selected}`;
    selectedMisterios = misteriosMap[main.dataset.selected];
    atualizarContemplando();
}

const showMisterio = document.querySelector('#show-misterio');
const contemplando = document.querySelector('#contemplando');
function atualizarContemplando() {
    const misterio = main.dataset.selected.toLowerCase();
    showMisterio.innerText = `No ${ordinalMap[misterioAtual - 1]} mistério ${misterio.substring(0, misterio.length - 1)}, contemplamos`;
    contemplando.innerText = `${selectedMisterios[misterioAtual - 1]}`;
}

const proximo = document.querySelector('#proximo');
const anterior = document.querySelector('#anterior');
proximo.onclick = () => {
    if (++misterioAtual > 5) {
        reiniciar();
        return;
    }
    atualizarContemplando();
}

anterior.onclick = () => {
    if (--misterioAtual > 0) {
        atualizarContemplando();
    } else reiniciar();
}

function reiniciar() {
    main.dataset.selected = 'none';
    misterioAtual = 1;
    selectedMisterios = undefined;
}
})()