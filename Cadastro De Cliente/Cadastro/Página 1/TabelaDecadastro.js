
    let table = document.getElementById("table")

        let listadecadastro = JSON.parse(localStorage.getItem('listadecadastro'))
            listadecadastro.forEach((item) => {
                let tr = table.insertRow()

                let td_Nome = tr.insertCell(0)
                let td_idade = tr.insertCell(1)
                let td_email = tr.insertCell(2)
                let td_endereco = tr.insertCell(3)
                let td_data_nasc = tr.insertCell(4)
                
                td_Nome.innerText = item.nome
                td_idade.innerText = item.idade
                td_email.innerText = item.email
                td_endereco.innerText = item.endereco
                td_data_nasc.innerText = item.data_nasc
            });


function Adicionar(){
    window.location.href = "../Página 2_cadastro/cadastro.html"
}