
let btnValidar = document.getElementById("btnValidar");
let parrafoMatriz = document.getElementById("matriz");
let btnReset = document.getElementById("btnResetear");
let alerta = document.getElementById("txtAlerta");
let matrizPIP = document.getElementById("MatrizPIP");
btnValidar.addEventListener("click", function validar() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let matrizUnitaria = document.getElementById("matrizUnitaria");
    let matrizPares = document.getElementById("matrizPares");
    let matrizPrimos = document.getElementById("matrizPrimos");
    let matrizImpares = document.getElementById("matrizImpares");
    let matriz = [];
    if (num1 == Math.abs(Math.trunc(num1)) && num2 == Math.abs(Math.trunc(num2))) {
        if (num1 == num2) {
            for (let index = 0; index < num1; index++) {
                matriz[index] = [];
                for (let index2 = 0; index2 < num2; index2++) {
                    matriz[index][index2] = 0;
                }
            }//lleno de ceros la matriz
            //console.log(matriz);
            verMatriz(matriz);
            matrizUnitaria.addEventListener("change", function matrizUnitaria() {
                let matrizUnitaria = [];
                for (let index = 0; index < num1; index++) {
                    matrizUnitaria[index] = [];
                    for (let index2 = 0; index2 < num2; index2++) {
                        if (index == index2) {
                            matrizUnitaria[index][index2] = 1
                        }
                        else {
                            matrizUnitaria[index][index2] = 0;
                        }
                    }
                }
                console.table(matrizUnitaria);
                verMatriz(matrizUnitaria);
            });//matrizunitaria
            matrizPares.addEventListener("change", function matrizPares() {
                let matrizPares = [];
                let sumaIndix = 0;
                for (let index = 0; index < num1; index++) {//filas
                    matrizPares[index] = [];
                    for (let index2 = 0; index2 < num2; index2++) {//columnas
                        sumaIndix = index + index2;//0+0=0;0+1=1...
                        matrizPares[index][index2] = 0;
                        if (sumaIndix % 2 == 0) {
                            matrizPares[0][0] = 0;//aqui lo podria mejorar
                            matrizPares[index][index2] = Math.trunc(Math.random() * 11) + 1;
                        }
                    }//segundo for
                }//primer for
                console.table(matrizPares);
                verMatriz(matrizPares);
            });//matrizPares
            matrizImpares.addEventListener("change", function matrizImpares() {
                let matrizImpares = [], sumaImpares;
                for (let index = 0; index < num1; index++) {
                    matrizImpares[index] = [];
                    for (let index2 = 0; index2 < num2; index2++) {
                        sumaImpares = index + index2;
                        if (sumaImpares % 2 === 0) {
                            matrizImpares[index][index2] = 0
                        }
                        else {
                            matrizImpares[index][index2] = Math.trunc(Math.random() * 10) + 1;
                        }
                    }
                }
                console.table(matrizImpares);
                verMatriz(matrizImpares);
            });
            matrizPrimos.addEventListener("change", function matrizPrimos() {
                let matrizPrimos = [];
                let sumaPrimos = 0;
                for (let index = 0; index < num1; index++) {
                    matrizPrimos[index] = [];
                    for (let index2 = 0; index2 < num2; index2++) {
                        let contador = 0;
                        let aumento = 1;
                        sumaPrimos = index + index2;
                        matrizPrimos[index][index2] = 0;
                        while (aumento <= sumaPrimos) {//1<6; 2<6;3<6;4<6;5<6;6<=6;7<6
                            if ((sumaPrimos % aumento) === 0) {
                                contador++;
                                if (contador === 2) {
                                    matrizPrimos[index][index2] = Math.trunc(Math.random() * 10) + 1;
                                }
                                else {
                                    matrizPrimos[index][index2] = 0;
                                }
                            }
                            aumento++;
                        }
                    }//segundo for
                }//primer for
                console.table(matrizPrimos);
                verMatriz(matrizPrimos);
            });
        }//if num1==num2
        else {
            alerta.style.color = "red";
            alerta.textContent = "los valores no son matriz cuadratica";
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
btnReset.addEventListener("click", function resetear() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    num1 = 0;
    num2 = 0;
    parrafoMatriz.innerText = "";
    alerta.textContent = "";
    matrizUnitaria.checked = false;
    matrizPares.checked = false;
    matrizImpares.checked = false;
    matrizPrimos = false;
});
