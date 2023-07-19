const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];
const atividades = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (atividades.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido.`);
    } else {

        nome.push(inputNome.value);
        telefone.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td> ${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}