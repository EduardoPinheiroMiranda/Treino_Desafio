const buttom = document.getElementById('buttom')
const nome = document.getElementById('name')
const idade = document.getElementById('age')
const email = document.getElementById('email')
const end = document.getElementById('end')
const data_nasc = document.getElementById('nasc')
const conf = document.getElementById('conf')
//---------------------alertas--------------------------------
const alert_nome = document.getElementById('nome')
const alert_idade = document.getElementById('idade')
const alert_mail = document.getElementById('mail')
const alert_end = document.getElementById('endereco')
const alert_nasc = document.getElementById('data_nasc')
//---------------------validadores-----------------------
let n 
let i 
let e 
let em 
let d

function Adicionar(){
    if(nome.value.length < 7){
        alert_nome.innerText='*O nome é invalido, tente novamente.'
        alert_nome.setAttribute('style','font-size: 10pt')
        n = 'false'
    }else{ 
        n = 'true'
        alert_nome.innerHTML = ''
    }

    if(idade.value <= 0){
        alert_idade.setAttribute('style', 'font-size: 10pt')
        alert_idade.innerText = '*A idade está errada, tente novamente.'
        i = 'false'
    }else{ 
        i = 'true'
        alert_idade.innerHTML = ''
    }

    if(email.value.length <= 0){
        alert_mail.setAttribute('style', 'font-size: 10pt')
        alert_mail.innerText = '*o e-mail está incorreto, tente novamente.'
        e = 'false'
    }else{ 
        e = 'true'
        alert_mail.innerHTML = ''
    }
    
    if(end.value.length <= 0){
        alert_end.setAttribute('style', 'font-size: 10pt')
        alert_end.innerText = '*O endereço está incorreto, tente novamente.'
        em = 'false'
    }else{ 
        em = 'true'
        alert_end.innerHTML = ''
    }

    if(data_nasc.value <= 1011900 ){
        alert_nasc.setAttribute('style', 'font-size: 10pt')
        alert_nasc.innerText = '*a data de nascimente está incorreta, tente novamente. '
        d = 'false'
    }else{ 
        d = 'true'
        alert_nasc.innerHTML = ''
    }

    
    if(n=='true' && i=='true' && e=='true' && em=='true' && d=='true'){
        let listadecadastro = JSON.parse(localStorage.getItem('listadecadastro')||'[]')
        listadecadastro.push({
            nome: nome.value,
            idade:idade.value,
            email:email.value,
            end:end.value,
            data_nasc: data_nasc.value
        })
        localStorage.setItem('listadecadastro', JSON.stringify(listadecadastro))

        conf.setAttribute('style','background-color: rgb(58, 255, 9)')
        conf.innerHTML = `<strong>O cadastro foi realizado com sucesso</strong>`
        


    }



}