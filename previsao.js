const key = "21084adbf6fb8b09a54e69f834fc1a23"
const BuscaImagem = document.querySelector(".fotos")

//Random Imagem de fundo ao carregar a pagina.
const ArrayDeImagens = ['..//assets/por-do-sol.jpg', '..//assets/chuva.jpg', '..//assets/frio.jpg', '..//assets/tarde.jpg', '..//assets/manha.jpg', '..//assets/01.jpg', '..//assets/02.jpg',
 '..//assets/03.jpg', '..//assets/04.jpg', '..//assets/05.jpg', '..//assets/06.jpg', '..//assets/07.jpg', '..//assets/08.jpg', '..//assets/noite.jpg', '..//assets/noite 2.jpg', '..//assets/noite 3.jpg',]  

BuscaImagem.addEventListener('click', ()=>{

    window.location.reload()
})
RandomImagem()

function RandomImagem(){
    const randomIndex = Math.floor(Math.random()*ArrayDeImagens.length)

    if(localStorage.getItem('currentIndex') !== String(randomIndex)){
        BuscaImagem.src = ArrayDeImagens[randomIndex]
        localStorage.setItem('currentIndex', randomIndex)
    }else{
        RandomImagem()
    }
}
//Função Botão Buscar

function FecharBuscar(){
    document.querySelector(".input-busca").style.visibility = 'hidden';
    document.querySelector(".input-busca").style.width = '40px';
    document.querySelector(".input-busca").style.padding = '0.5rem 0.5rem 0.5rem 2.6rem'; 
    document.querySelector(".input-busca").style.transition = 'all 0.5s ease-in-out 0s'; 
    document.querySelector(".input-busca").value = ""; 
}
 function AbrirBuscar(){
    document.querySelector(".input-busca").style.visibility = 'visible';
    document.querySelector(".input-busca").style.width = '300px';
    document.querySelector(".input-busca").style.padding = '0.5rem 0.5rem 0.5rem 3.1rem';
    document.querySelector(".input-busca").style.transition = 'all 0.5s ease-in-out 0s';
    document.querySelector(".input-busca").velue = "";  
}

function MovimentoInput(buscar){
    const mostrar = document.querySelector(".input-busca").style.visibility;
   

    if(mostrar === 'hidden'){
        AbrirBuscar();
    }else{
        FecharBuscar();
    }
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        const ValorInput = input.value;
        MovimentoInput(ValorInput)
    }
})
document.addEventListener('DOMContentLoaded' , ()=>{
    FecharBuscar();
})

//Buscar Api e Mostrar na tela.

async function BuscarDados(buscar){

        const Dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${buscar}&appid=${key}&units=metric&lang=pt_br`).then(resultado => resultado.json())
        MostrarNaTela(Dados)
}

function MostrarNaTela(Dados){
    document.querySelector(".nome-cidade").innerHTML = Dados.name;
    document.querySelector(".info").innerHTML = Dados.weather[0].description
    document.querySelector(".temp").innerHTML = Dados.main.temp.toFixed(0)+"ºC";
    document.querySelector(".tempmax").innerHTML =  "Max: " + Dados.main.temp_max.toFixed(0)+"ºC";
    document.querySelector(".tempmin").innerHTML =  "Min: " + Dados.main.temp_min.toFixed(0)+"ºC";
    document.querySelector(".icone-tempo").src = `./assets/Icones-clima-tempo/${Dados.weather[0].icon}.png`
}

function BuscarCidade(){
    const buscar = document.querySelector(".input-busca").value
    MovimentoInput(buscar);
    BuscarDados(buscar)
}