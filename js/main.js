const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",() => {
        /* console.log(boton.textContent); */
        const botonApretado = boton.textContent;
        if(boton.id == "C"){
            pantalla.value = "0";
            return;

        }
        if(boton.id === "borrar"){
            if(pantalla.value.length === 1 || pantalla.value === "Error!"){
                pantalla.value = "0";
            }else{
                pantalla.value = pantalla.value.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
                /* pantalla.value = eval(pantalla.value); */
                let expresion = pantalla.value;

                // Corrige multiplicaciones implícitas automáticamente:
                // 1. Número seguido de paréntesis (ej: 2(3) -> 2*(3))
                expresion = expresion.replace(/(\d)(\()/g, '$1*$2');
                // 2. Paréntesis seguido de número (ej: (3)2 -> (3)*2)
                expresion = expresion.replace(/(\))(\d)/g, '$1*$2');
                // 3. Dos paréntesis juntos (ej: (1+2)(3+4) -> (1+2)*(3+4))
                expresion = expresion.replace(/(\))(\()/g, '$1*$2');

                pantalla.value = eval(expresion);

            }catch{
                pantalla.value = "Error!";
            }
            return;
        }



        if (pantalla.value === "0" || pantalla.value === "Error!"){
            pantalla.value = botonApretado;
        }else{
            pantalla.value += botonApretado;
        }


    })/* nos tre el contenido de cada boton */

})