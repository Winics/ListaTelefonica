const form = document.getElementById ('form-tabela');

let linhas = '';

form.addEventListener('submit', function (e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
})

function adicionaLinha() {
    const inputNome = document.getElementById('input-nome');
    const inputTelefone = document.getElementById('input-telefone');

    let linha = '<tr>';
    linha += `<td><div>${inputNome.value}</div></td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;
    
    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotal(){
    let totalNumeros = document.getElementById('total-numeros');
    let finalNumeros = totalNumeros.getElementsByTagName('tr');

    const totalFinal = document.getElementById('final-total');

    totalFinal.innerHTML = finalNumeros.length
}