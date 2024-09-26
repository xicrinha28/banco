// Lista de nomes dos alunos
var listaDeNomes = ["maylon", "arthur", "ryan", "raphel", "maria", "gabriel", "maycon", "dalton", "patrick"];

// Função para cadastrar um novo aluno
function cadastrarUsuario() {
    var nome = prompt("Digite o nome do aluno:");
    
    // Verifica se o nome já está na lista
    if (listaDeNomes.includes(nome)) {
        alert(nome + " já está cadastrado.");
    } else {
        listaDeNomes.push(nome);
        alert(nome + " foi cadastrado com sucesso!");
    }
}

// Função para listar os alunos cadastrados
function listarAlunos() {
    listaDeNomes.forEach(nome => {
        alert(nome + " faz o curso de programação.");
    });
}

// Chama as funções conforme necessário
cadastrarUsuario();
listarAlunos();
