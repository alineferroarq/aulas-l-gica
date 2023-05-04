function boasVindas()
{
document.write("<h1>Olá pessoal</h1>");
}
function boasVindasComNome(nome)
{
document.write(`<h1>Olá meu nome é ${nome}</h1>`)
}
function boasVindasComNome2(nome = "")
{
document.write(`<h1>Olá meu nome é ${nome}</h1>`)
}
function boasVindasComNome3(nome = "", idade = "")
{
document.write(`<h1>Olá meu nome é ${nome} e minha idade é ${idade} anos</h1>`)
}
function hoje()
{
    return new Date();
}
function dobrarValor(valor)
{
    return valor * 2;
}

boasVindas();
boasVindasComNome("aline");
boasVindasComNome2();
boasVindasComNome3("isabele", 25);
boasVindasComNome(`aline hoje é ${hoje()}`);

document.write(`<h1>O dobro de 2 é ${dobrarValor(2)}</h1>`);
document.write(`<h1>O dobro de 4 é ${dobrarValor(4)}</h1>`);
document.write(`<h1>O dobro de 6 é ${dobrarValor(6)}</h1>`);
document.write(`<h1>O dobro de 8 é ${dobrarValor(8)}</h1>`);