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
const alert_end = document.getElementById('endereco')
const alert_nasc = document.getElementById('data_nasc')
//---------------------validadores-----------------------
let n = false
let i = false
let e = false
let E = false
let d = false


function Adicionar(){
    if(nome.value.length < 7){
        alert_nome.innerText='*O nome é invalido, tente novamente.'
        alert_nome.setAttribute('style','font-size: 10pt')
    }else{ n = true}

    if(idade.value.length <= 0){
        alert_idade.setAttribute('style', 'font-size: 10pt')
        alert_idade.innerText = '*A idade está errada, tente novamente.'
    }else{ i = true}

    if(email.value.length <= 0){
        alert_mail.setAttribute('style', 'font-size: 10pt')
        alert_mail.innerText = '*o e-mail está incorreto, tente novamente.'
    }else{ e = true}
    
    if(end.value.length <= 0){
        alert_end.setAttribute('style', 'font-size: 10pt')
        alert_end.innerText = '*O endereço está incorreto, tente novamente.'
    }else{ E = true}

    if(data_nasc.value.length <= 0){
        alert_nasc.setAttribute('style', 'font-size: 10pt')
        alert_nasc.innerText = '*a data de nascimente está incorreta, tente novamente. '
    }else{ d = true}

}