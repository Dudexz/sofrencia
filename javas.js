
function play(){
    if(confirm("tocar")){}
}
function proxima(){
    if(confirm("proxima")){}
}
const pause= document.querySelector("#pause")
const musica2= document.querySelector("#musica2")
const ciumeira=document.querySelector("#ciumeira")
const outra=document.querySelector("#passar")
const audio= []
audio.push(ciumeira)
audio.push(musica2)
var indiceAtual=0

function pausar(){
    alert("uma musica de cada vez");
}

function player(){
    audio[indiceAtual].play() 
}
function passar(){
    audio[indiceAtual].pause()
    indiceAtual ++
    if(indiceAtual>=audio.length)
    audio[indiceAtual].play()
}

function voltar(){
    audio[indiceAtual].pause()
    indiceAtual = indiceAtual -1

    audio[indiceAtual].play()
}
