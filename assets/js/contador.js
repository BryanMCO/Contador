

var valorContador = 0 // Iniciamos nuestra variable en 0


    function incrementar(){
        valorContador++;
        document.getElementById("Contador").innerHTML = valorContador;
    };

    function decrementar(){
        valorContador--;
        document.getElementById("Contador").innerHTML = valorContador;
    };

    function resetear(){
        valorContador = 0;
        document.getElementById("Contador").innerHTML = valorContador;
    };

        