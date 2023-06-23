const outra=document.querySelector("#passar")
const pause= document.querySelector("#pause")
const Graveto= document.querySelector("#Graveto")
const ciumeira=document.querySelector("#ciumeira")
const porteiro=document.querySelector("#porteiro")
const traicao=document.querySelector("#traicao")
const conspiracao=document.querySelector("#conspiracao")
const completa=document.querySelector("#completa")
const audio= []
audio.push(ciumeira)
audio.push(Graveto)
audio.push(porteiro)
audio.push(traicao)
audio.push(conspiracao)
audio.push(completa)
var indiceAtual=0

function pausar(){
    alert("uma musica de cada vez");
}

function player(){
    if(audio[indiceAtual].paused){audio[indiceAtual].play()}
    else {
     audio[indiceAtual].pause()
    }

}
function passar(){
    audio[indiceAtual].pause()
    indiceAtual ++
   if(indiceAtual>=audio.length){
    indiceAtual = 0
   }
    audio[indiceAtual].play()
}

function voltar(){
    audio[indiceAtual].pause()
    indiceAtual = indiceAtual -1

    audio[indiceAtual].play()
}
