const form = document.getElementById("form-atividade")
/*cost = cria uma referência somente leitura a um valor

form = cria um bloco para que tags de formulário e seus dados
 sejam agrupados e encaminhados para outro documento, em conjunto

document.getElementById = permite obter um elemento do documento a partir de 
seu atributo ID especificado*/

const imgAprovado = '<img src="./img/aprovado.png" alt="emoji celebrando" />' //cria um elemento aprovado

const imgReprovado = '<img src="./img/reprovado.png" alt="emoji decepcionado" />'//cria um elemento reprovado

const atividades = [] //leitura das atividade
const notas = [] //leitura das notas

const spanAprovado = '<span class="aprovado">Aprovado</span>' //cria um elemento aprovado
const spanReprovado = '<span class="reprovado">Reprovado</span>' //cria um elemento reprovado

const notaMinima = parseFloat(prompt("Digite a Nota Mínima: "))
// const = faz leitura da nota mínima
//parseFloat = analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número de ponto flutuante (número decimal).
//prompt = mostrar ao usuário uma mensagem e um botão de confirmação de que o usuário tenha visto a mensagem

let linhas = ' '
// let = coleções de valores nas quais é possível iterar os elementos em ordem de inserção

form.addEventListener('submit', function(e){
    e.preventDefault();

//form.addEventListener = cria um bloco para registrar uma única espera de evento em um único alvo.
//submit =  para que os dados sejam enviados para outro documento 
//function = define uma função com os especificados parâmetros
//preventDefault = Cancela o evento se for cancelável, sem parar a propagação do mesmo.

    adicionaLinha()
    atualizaTabela()
    atualizaMeidaFinal()

})

function adicionaLinha() {

    const inputNomeAtividade = document.getElementById("nome-atividade")
    const inputNotaAtividade = document.getElementById("nota-atividade")

    if (atividades.includes(inputNomeAtividade.value)) {

        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
//$ =  é usado para interpolar variáveis
        
    }
    //input = utilizada para a construção de formulários HTML para algum tipo de cadastro, formulários de contato, entre outros
    //getElementById = Retorna a referência do elemento através do seu ID.
    //includes = determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
    // value = retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto. 
    //alert = exibe uma mensagem no navegador por meio de uma caixa de diálogo,
    else {

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))
    // push = adiciona valores a um array
    /* parseFloat = analisa um argumento (convertendo-o para uma string primeiro
     caso necessário) e retorna um número de ponto flutuante (número decimal)*/

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'
    // += = concatenar strings
    //tr = cria uma linha
    //td = define cada uma das células da tabela.

    linhas += linha

    }

    inputNomeAtividade.value = ' '
    inputNotaAtividade.value = ' '
    
}

//input = é utilizada para proporcionar interatividade à página,
 

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

/* querySelector = Retorna o primeiro elemento dentro do documento 
(usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento)
que corresponde ao grupo especificado de seletores*/
//tbody = é o espaço onde são colocadas as linhas dos detalhes, de dados, em uma tabela HTML
// innerHTML =  usado para receber o conteúdo de um elemento HTML ou para definir um novo conteúdo para ele.


}

function atualizaMeidaFinal() {

    const mediaFinal = calculaMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
    
}

function calculaMediaFinal() {

    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {

        somaDasNotas += notas[i]
        
    }

/*é uma soma de todas as notas
ele soma cada posição do array notas na variavel soma das notas
*/


    return somaDasNotas / notas.length
    
// return - finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.
//length = indica quantos argumentos a função espera, i.e. o número de parametros formais
}