const buttom = document.getElementById('buttom')
const nome = document.getElementById('name')
const idade = document.getElementById('age')
const email = document.getElementById('email')
const end = document.getElementById('end')
const data_nasc = document.getElementById('nasc')
//-----------------------------------------------------
let alert_nome = document.getElementById('nome')
const alert_idade = document.getElementById("idade")
const alert_mail = document.getElementById('mail')
const alert_end = document.getElementById('end')
const alert_nasc = document.getElementById('nasc')

function entrar(){
    buttom.setAttribute('style', 'background-color:rgb(248, 236, 236)')
}
function sair(){
    buttom.setAttribute('style', 'background-color:white')
}

function Adicionar(){
    alert("ola")
    if(nome.value.length<7){
        alert_nome('style', 'color: red')
        
    }
}