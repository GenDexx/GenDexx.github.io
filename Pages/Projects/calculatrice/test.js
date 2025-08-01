function dis(val){
    document.querySelector('#ecran').innerHTML+=val
}

function clr(){
    document.querySelector('#ecran').innerHTML=""
}

function slv(){
    document.querySelector('#ecran').innerHTML=eval(document.querySelector('#ecran').innerHTML)
}