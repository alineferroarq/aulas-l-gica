function boasVindas(nome, horario)
{
    if(horario >=6 && horario <12){
    document.write(`<h1>bom dia seja bem vindo ${nome}</h1>`)
    }
    else if(horario >=12 && horario <18){
        document.write(`<h1>boa tarde seja bem vindo ${nome}</h1>`)

    }
    else{
        document.write(`<h1>boa noite seja bem vindo ${nome}</h1>`)
    }

}
boasVindas("Aline", 8)
boasVindas("danile", 15)
boasVindas("djoão", 20)

function calcularConta(energia, porc){
    return ((energia*porc)/100)+energia;

}
document.write(`<h1>O valor a ser pago esse mês ${calcularConta(237, 23)}</H1>`)

function aumentoDeSalario(salario, porcent){
 return ((salario*porcent)/100);
}
let impacto = (aumentoDeSalario(3750, 10) * 5) + aumentoDeSalario(1300, 15) + aumentoDeSalario(1300, 10) +aumentoDeSalario(2200, 5)
document.write(`<h1>O salário do programador será de ${aumentoDeSalario(3750, 10)}</h1>`)
document.write(`<h1>O salário da secretaria será de ${aumentoDeSalario(1300, 15)}</h1>`)
document.write(`<h1>O salário do aux. de limpeza será de ${aumentoDeSalario(1300, 10)}</h1>`)
document.write(`<h1>O salário do designer será de ${aumentoDeSalario(2200, 5)}</h1>`)
document.write(`<h1>O impacto da empresa será de ${impacto}</h1>`)

function calcularMedia(teorica, pratica1, pratica2){
    return ((teorica*2)+pratica1+pratica2)/4;
    }
    document.write(`<h1>A média é ${calcularMedia(8, 5, 3)}</h1>`)

var dia = 0
var tarde = 0
var noite = 0

function estacionamento(hora){
    if(hora >= 5 && hora < 12){
      dia++
    }
    else if(hora >= 12 && hora < 18){
        tarde++
      }
      
    else{
        noite++
    }
}
estacionamento(22)
estacionamento(24)
estacionamento(21)
estacionamento(10)
estacionamento(2)
estacionamento(14)
estacionamento(9)
estacionamento(8)
estacionamento(5)
estacionamento(11)

document.write(`<h1>Carros da manhã: ${dia}</h1>`)
document.write(`<h1>Carros da tarde: ${tarde}</h1>`)
document.write(`<h1>Carros da noite: ${noite}</h1>`)
document.write(`<h1>Total de carros: ${dia+tarde+noite}`)

const minhaFuncao = function(parametro){

}
minhaFuncao();

const outraFuncao = (parametro) => {
    alert("outra funcao")
}
outraFuncao()

(() => {
alert("nada chama nada")
})()



