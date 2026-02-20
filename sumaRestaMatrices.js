let btnValidar = document.getElementById("btnValidar");
let sumaMatriz = document.getElementById("matrizUnitaria");
let restaMatiz = document.getElementById("matrizPares");
let multMatriz = document.getElementById("matrizImpares");
let transMatriz = document.getElementById("matrizPrimos");
let alerta = document.getElementById("txtAlerta");

let matrizAA = document.getElementById("matriz");
let matrizBB = document.getElementById("matriz1");
let resultadoMatriz = document.getElementById("matrizPIP");
let num1, num2;

btnValidar.addEventListener("click", function btnValidar() {
    num1 = parseFloat(document.getElementById("numero1").value);
    num2 = parseFloat(document.getElementById("numero2").value);
    if (num1 == Math.abs(Math.trunc(num1)) && num2 == Math.abs(Math.trunc(num2))) {
        if (num1 == num2) {
            let matrizPrueba = [];
            for (let index = 0; index < num1; index++) {
                matrizPrueba[index] = [];
                for (let index2 = 0; index2 < num2; index2++) {
                    matrizPrueba[index][index2] = 0;
                }
            }
            verMatrizA(matrizPrueba);
        }
        else if (num1 != num2) {
            alerta.style.color = "red";
            alerta.textContent = "La matriz no es cuadratica (2x2, 3x3).";
        }
    }
    else if (num1 != Math.abs(Math.trunc(num1))) {
        alerta.style.color = "Red";
        alerta.textContent = "El valor 1 no es un Entero Positivo."
    }
    else if (num2 != Math.abs(Math.trunc(num2))) {
        alerta.style.color = "Red";
        alerta.textContent = "El valor 2 no es un entero positivo.";
    }
});
sumaMatriz.addEventListener("change", function sumaMatriz() {
    let matrizA = [];
    let matrizB = [];
    let matrizResultado = [];
    for (let index = 0; index < num1; index++) {
        matrizA[index] = [];
        matrizB[index] = [];
        matrizResultado[index] = [];
        for (let index2 = 0; index2 < num2; index2++) {
            matrizA[index][index2] = Math.trunc(Math.random() * 11) + 1;
            matrizB[index][index2] = Math.trunc(Math.random() * 11) + 1;
            matrizResultado[index][index2] = matrizA[index][index2] + matrizB[index][index2];
        }
    }
    verMatrizA(matrizA);
    verMatrizB(matrizB);
    verResultado(matrizResultado);
});
restaMatiz.addEventListener("change", function restaMatiz() {
    let matrizA = [];
    let matrizB = [];
    let matrizResultado = [];
    for (let index = 0; index < num1; index++) {
        matrizA[index] = [];
        matrizB[index] = [];
        matrizResultado[index] = [];
        for (let index2 = 0; index2 < num2; index2++) {
            matrizA[index][index2] = Math.trunc(Math.random() * 11) + 1;
            matrizB[index][index2] = Math.trunc(Math.random() * 11) + 1;
            matrizResultado[index][index2] = matrizA[index][index2] - matrizB[index][index2];
        }
    }
    verMatrizA(matrizA);
    verMatrizB(matrizB);
    verResultado(matrizResultado);
});//b-c
multMatriz.addEventListener("change", function multMatriz() {
    let matrizA = [];
    let matrizB = [];
    let matrizResultado = [];
    for (let index = 0; index < num1; index++) {
        matrizA[index] = [];
        matrizB[index] = [];
        matrizResultado[index] = [];
        for (let index2 = 0; index2 < num2; index2++) {
            matrizA[index][index2] = Math.trunc(Math.random() * 11) + 1;
            matrizB[index][index2] = Math.trunc(Math.random() * 11) + 1;
            matrizResultado[index][index2] = 0;
        }
    }
    for (let index = 0; index < num1; index++) {//filas
        for (let index2 = 0; index2 < num2; index2++) {//columnas
            for (let index3 = 0; index3 < num2; index3++) {
                matrizResultado[index2][index3]=matrizA[index2][index3]*matrizB[index3][index2];
            }
        }
    }
    verMatrizA(matrizA);
    verMatrizB(matrizB);
    verResultado(matrizResultado);
});
transMatriz.addEventListener("change", function transMatriz() {

});
function verMatrizA(matrizA) {
    let mostrarMatriz = "";
    for (let index = 0; index < matrizA.length; index++) {
        for (let index2 = 0; index2 < matrizA[index].length; index2++) {
            mostrarMatriz += matrizA[index][index2] + " ";
        }
        mostrarMatriz += "\n";
    }
    matrizAA.innerText = mostrarMatriz;
    console.log("Matriz A: ");
    console.table(matrizA);
}
function verMatrizB(matrizB) {
    let mostrarMatriz = "";
    for (let index = 0; index < matrizB.length; index++) {
        for (let index2 = 0; index2 < matrizB[index].length; index2++) {
            mostrarMatriz += matrizB[index][index2] + " ";
        }
        mostrarMatriz += "\n";
    }
    matrizBB.innerText = mostrarMatriz;
    console.log("Matriz B: ");
    console.table(matrizB);
}
function verResultado(matrizR) {
    let mostrarMatriz = "";
    for (let index = 0; index < matrizR.length; index++) {
        for (let index2 = 0; index2 < matrizR[index].length; index2++) {
            mostrarMatriz += matrizR[index][index2] + " ";
        }
        mostrarMatriz += "\n";
    }
    resultadoMatriz.innerText = mostrarMatriz;
    console.log("Matriz resultado: ");
    console.table(matrizR);
}