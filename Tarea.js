function agente(location, state){
    if (state=="DIRTY"){
        return 'CLEAN'
      }
    else if(location=='A'){
        return 'RIGHT'
    }else if (location=='B'){
        return 'LEFT'
    }
}
let Contador1 = 0
let Contador2 = 0
let Contador3 = 0
let Contador4 = 0
let Contador5 = 0
let Contador6 = 0 
let Contador7 = 0
let Contador8 = 0

function Simulemos(estado){
    var PosicionActual = estado[0]
    var estamos ;
    if(estado[0] == "A"){
        estamos = estado[1]
    }else if (estado[0] == "B"){
        estamos = estado[2]
    }
    if (PosicionActual == "A" && estado[1] == "DIRTY" && estado[2] == "DIRTY") {
        Contador1 = Contador1 + 1
        
    } else if (PosicionActual == "A" && estado[1] == "DIRTY" && estado[2] == "CLEAN") {
        Contador3 = Contador3 + 1
        
    } else if (PosicionActual == "A" && estado[1] == "CLEAN" && estado[2] == "DIRTY") {
        Contador5 = Contador5 + 1
       
    } else if (PosicionActual == "A" && estado[1] == "CLEAN" && estado[2] == "CLEAN") {
        Contador7 = Contador7 + 1
       
    } else if (PosicionActual == "B" && estado[1] == "DIRTY" && estado[2] == "DIRTY") {
        Contador2 = Contador2 + 1
        
    } else if (PosicionActual == "B" && estado[1] == "DIRTY" && estado[2] == "CLEAN") {
        Contador4 = Contador4+ 1
        
    } else if (PosicionActual == "B" && estado[1] == "CLEAN" && estado[2] == "DIRTY") {
        Contador6 = Contador6 + 1
        
    } else if (PosicionActual == "B" && estado[1] == "CLEAN" && estado[2] == "CLEAN") {
        Contador8 = Contador8 + 1
        
    }

    var resultado = agente(PosicionActual, estamos);
    console.log("Ubicación: "+PosicionActual +" |" +"Acción: "+resultado+"")
    document.getElementById("log").innerHTML += `<br>Ubicación: ${PosicionActual} | Acción: ${resultado}`;
    
    if (resultado == "CLEAN") {
        if (PosicionActual == "A") {
            estado[1] = "CLEAN";
        }else if(PosicionActual == "B") {
            estado[2] = "CLEAN";
        }
    } else if (resultado == "RIGHT"){
        estado[0] = "B";
    } 
    else if (resultado == "LEFT"){
        estado[0] = "A"
    }

    if (Contador1 >0 && Contador2>0 && Contador3>0 && Contador4>0 && Contador5>0 && Contador6>0 && Contador7>0 && Contador8>0 ){
        document.getElementById("fin").innerHTML = " Se a terminado el recorrido";
    }else{
        setTimeout(function() {   Simulemos(estado); }, 2000);
    }

}
let estados = ["A", "DIRTY", "DIRTY"];
setInterval(function() {
    let aleatorio = Math.random();
    if (aleatorio <= 0.30) {
        estados[1] = "DIRTY";
    } else if (aleatorio < 0.60) {
        estados[2] = "DIRTY";
    } else {
        estados[1] = "DIRTY";
        estados[2] = "DIRTY";
    }
}, 6000);

Simulemos(estados);