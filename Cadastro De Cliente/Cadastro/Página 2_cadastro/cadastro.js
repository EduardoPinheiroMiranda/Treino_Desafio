const buttom = document.getElementById('buttom')
const nome = document.getElementById('name')
const idade = document.getElementById('age')
const email = document.getElementById('email')
const end = document.getElementById('end')
const data_nasc = document.getElementById('nasc')
//---------------------alertas--------------------------------
const alert_nome = document.getElementById("nome")
const alert_idade = document.getElementById('idade')
const alert_mail = document.getElementById('mail')
const alert_end = document.getElementById('end')
const alert_nasc = document.getElementById('nasc')
//---------------------validadores-----------------------
let n = false
let i = false
let e = false
let E = false
let d = false


function Adicionar(){
    if(nome.value.length < 7){
        alert_nome.innerText='*O nome invalido, tente colocar seu nome de novo.'
        alert_nome.setAttribute('style','font-size: 10pt')
    }else{ n = true}
    
}