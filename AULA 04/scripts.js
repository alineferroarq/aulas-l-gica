

let quemComeca = 0;
let vez = 0;
let jogadas = 0;
let vitoria = false

function marcarCasa()
{
    
    let casa = event.target;
    if(vitoria == false){
        if(!casa.classList.contains("bola") && !casa.classList.contains("xis") && jogadas <=9){
            if(vez == 0){
                casa.classList.add("bola");
                casa.setAttribute("valor", 0)
                vez = 1;
            }else{
                casa.classList.add("xis");
                casa.setAttribute("valor", 1);
                vez = 0;
            }
            jogadas += 1;
        }else{
            if(jogadas == 9){
                resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = "empate";
                return;
            }else{
                alert("casa indisponivel")
            }

    }
   
    
    checkVitoria();
}else{
    alert("Fim de jogo")
}


    function checkVitoria(){
        let c1_valor = c1.getAttribute("valor");
        let c2_valor = c2.getAttribute("valor");
        let c3_valor = c3.getAttribute("valor");
        let c4_valor = c4.getAttribute("valor");
        let c5_valor = c5.getAttribute("valor");
        let c6_valor = c6.getAttribute("valor");
        let c7_valor = c7.getAttribute("valor");
        let c8_valor = c8.getAttribute("valor");
        let c9_valor = c9.getAttribute("valor");

        //primeira linha
        if(c1_valor == c2_valor && c2_valor == c3_valor && c3_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
        //segunda linha
        if(c4_valor == c5_valor && c5_valor == c6_valor && c6_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
        //terceira linha
        if(c7_valor == c8_valor && c8_valor == c9_valor && c9_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
        //primeira coluna
        if(c1_valor == c4_valor && c4_valor == c7_valor && c7_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
         //segunda coluna
         if(c2_valor == c5_valor && c5_valor == c8_valor && c8_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
          //terceira coluna
          if(c3_valor == c6_valor && c6_valor == c9_valor && c9_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
           //primeira diagonal
           if(c1_valor == c5_valor && c5_valor == c9_valor && c9_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
        }
         //segunda diagonal
         if(c3_valor == c5_valor && c5_valor == c7_valor && c7_valor != null){
            resultado.classList.add("active")
            document.querySelector("#resultado h1").innerHTML = (vez == 0) ? "bola venceu" : "xis venceu";
            vitoria = true
            return;
    }}}
