let palpites = [];
let tentativas = 0;
let biaNumero = Math.floor(Math.random() * 100) + 1;

palpite.onkeyup = function(event){
    if(event.key === "Enter"){
        if(tentativas < 5){
            
        //CHECA SE PALPITE JA ESTA NO ARRAY
        checarPalpite(palpite.value);
        //MOSTRAR AS TENTATIVAS
        mostrarPalpites();
        //ZERA O INPUT
        palpite.value = '';
        //CHECA SE ACABOU AS TENTATIVAS
        tentativas == 5 && encerrarJogo();
      }
    }
        
}
function mostrarPalpites(){
   
    let ps = document.querySelector('.palpites span');
    ps.innerHTML = palpites.toString().replaceAll(',','-');
}
function encerrarJogo()
{
    palpite.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'initial';
    resultado.innerHTML = 'Você não acertou, o número era: <span>'+biaNumero+'<span> '
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'initial';
    bia.src = 'IMG/derrota.png';
}
function checarPalpite(t)
{
    if(Number(t) >= 0 && Number(t) <= 100 && t !=''){
        if(palpites.includes(t)){
            alert('Este palpite já foi dado')
            return;
          }
          //ADICIONA NO ARRAY
          palpites.push(palpite.value);
          (Number(t) == biaNumero) && vitoria();
           //INCREMENTA AS TENTATIVAS
           tentativas++;
    }else{
        alert('Digite um número válido')
    }
   
   
}
function restart()
{
    palpites = [];
    bia.src = 'IMG/bia.png';
    tentativas = 0;
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'none';
    let resultado = document.querySelector('resultado');
    resultado.style.display = 'none';
    let ps = document.querySelector('.palpites span');
    ps.innerHTML = '';
    palpite.style.display = 'initial';
    gerarRandom();

}
function vitoria()
{
    palpite.style.display = 'none';
    let resultado = document.querySelector('.resultado');
    resultado.style.display = 'initial';
    resultado.innerHTML = 'Parabéns o número era: <span>'+biaNumero+'</span>';
    let encerrar = document.querySelector('.encerrar');
    encerrar.style.display = 'initial';
    bia.src = 'IMG/vitoria.png';

}
function gerarRandom()
{
    return biaNumero = Math.floor(Math.random() * 100) + 1;
}