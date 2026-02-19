
let btnValidar = document.getElementById("btnValidar");
let parrafoMatriz = document.getElementById("matriz");
let btnReset = document.getElementById("btnResetear");
let alerta=document.getElementById("txtAlerta");
let matrizPIP=document.getElementById("MatrizPIP")
btnValidar.addEventListener("click", function validar() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let matrizUnitaria=document.getElementById("matrizUnitaria");

    let matriz = [];
    if (num1 == Math.abs(Math.trunc(num1)) && num2 == Math.abs(Math.trunc(num2))) {
        if (num1 == num2) {
            for (let index = 0; index < num1; index++) {
                matriz[index] = [];
                for (let index2 = 0; index2 < num2; index2++) {
                    matriz[index][index2] = 0;
                }
            }//lleno de ceros la matriz
            console.log(matriz);
            verMatriz(matriz);
            matrizUnitaria.addEventListener("change",function matrizUnitaria() {
                let matrizUnitaria=[];
                for (let index = 0; index < num1; index++) {
                    matrizUnitaria[index]=[];
                    for (let index2 = 0; index2 < num2; index2++) {
                        if (index==index2) {
                            matrizUnitaria[index][index2]=1
                        }
                        else{
                            matrizUnitaria[index][index2]=0;
                        }
                    }
                }
                verMatriz(matrizUnitaria);
            });//matrizunitaria
        }//if num1==num2
        else{
            alerta.style.color="red";
            alerta.textContent="los valores no son matriz cuadratica";
        }
    }//if para validar que sean enteros positivos
    else if (num1 != Math.abs(Math.trunc(num1))) {
        parrafoMatriz.innerText = "El valor 1 no es entero positivo";
    }
    else if (num2 != Math.abs(Math.trunc(num2))) {
        parrafoMatriz.innerText = "El valor 2 no es entero positivo";
    }
});
function verMatriz(matriz) {
    let mostrarMatriz = "";
    for (let index = 0; index < matriz.length; index++) {
        for (let index2 = 0; index2 < matriz[index].length; index2++) {
            mostrarMatriz += matriz[index][index2] + " ";
        }
        mostrarMatriz += "\n";
    }
    parrafoMatriz.innerText = mostrarMatriz;
    //matrizPIP.innerText=mostrarMatriz;
}//con esto muestro la matriz
