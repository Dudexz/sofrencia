
function play(){
    if(confirm("tocar")){}
}
function curtir(){
    if(confirm("curtir")){}
}

const ciumeira=document.querySelector("#ciumeira")
const outra=document.querySelector("#proxima")
const audio= []
audio.push(ciumeira)
audio.push(outra)
var indiceAtual=0

function pausar(){
    alert("uma musica de cada vez");
}

function player(){
    audio[indiceAtual].play() 
}
function proxima(){
    if(confirm("outra")){}
    audio[indiceAtual].pausar()
    indiceAtual=indiceAtual + 1
    audio[indiceAtual].player()
}