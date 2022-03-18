let clientes = document.getElementById('TabeladePessoas');

    listadecadastro = JSON.parse(localStorage.getItem('listadecadastro'))
        listadecadastro.forEach((item) => {
            if(item.nome != ' '){
                clientes.innerHTML += `${item.nome} | ${item.idade}|${item.email} | ${item.end} | ${item.data_nasc}<br>`
            }
        });

    

function Adicionar(){
    window.location.href = "../Página 2_cadastro/cadastro.html"
}