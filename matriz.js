
let btnvalidacion=document.getElementById("btnValidar");
let alerta=document.getElementById("txtAlerta");
let mostrarMatriz=document.getElementById("matriz");
let matrizPares=document.getElementById("matrizPares");
let matrizImpares=document.getElementById("matrizImpares");
let matrizPrimos=document.getElementById("matrizPrimos");
let matrizPIP=document.getElementById("matrizPIP");
 /*aqui hare mi validacion */
 //el *11 lo escala
//let num=Math.trunc(Math.random()*2);//con el floor lo redondeo masomenos
//me da 0 al 9, si quiero que me salga 10 lo haria de 0 al 11
//aca me sale 0.34 o 0.algo entonces como es de 0 a 1, o sea que esta dentro de ese rango
//me da 0. y lo mas proximo al 1 mas no el 1.
//math.floor elimina decimales...
//console.log(num+" redondeado");//probando que el math.random() funciona

btnvalidacion.addEventListener("click", function validar() {
    let num1=parseFloat(document.getElementById("numero1").value);
    let num2=parseFloat(document.getElementById("numero2").value);
    if (num1==Math.abs(Math.trunc(num1))&&num2==Math.abs(Math.trunc(num2))) {
        alerta.style.color="Blue";
        alerta.textContent="Mostrar matriz"
        matriz(num1,num2);//estoy llamando a la funcion... no se que paso?
        matrizPares.addEventListener("change",function matrizPares() {
            //matrizPIP.textContent="clic en pares";
            //console.log(num1,num2);
            if (num1==num2) {
                let matrizOriginal=[];
                let matrizIdentidad=[];
                for (let index = 0; index < num1; index++) {
                    matrizOriginal[index]=[];
                    matrizIdentidad[index]=[];
                    for (let index2 = 0; index2 < num2; index2++) {
                        matrizOriginal[index][index2]=Math.trunc(Math.random()*10)*2;
                        if (index==index2) {
                            matrizIdentidad[index][index2]=1;
                        }
                        else{
                            matrizIdentidad[index][index2]=0;
                        }
                    }//segundo for
                }//primer for
                let unirMatrices=[];
                for (let index = 0; index < num1; index++) {
                    unirMatrices[index]=[...matrizOriginal[index],...matrizIdentidad[index]];
                }//for unir mis matrices
                for (let index = 0; index < num1; index++) {
                    let pivote=unirMatrices[index][index];
                    for (let index2 = 0; index2 < num1*2; index2++) {
                        unirMatrices[index][index2]/=pivote;
                    }//para sacar 1 a mi pivote
                    for (let index3 = 0; index3 < num1; index3++) {
                        if (index3!=index) {
                            let aux=unirMatrices[index3][index];
                            for (let index2 = 0; index2 < num1*2; index2++) {
                                unirMatrices[index3][index2]-=aux*unirMatrices[index][index2];
                            }
                        }
                    }//para hacer ceros en la columna
                }//primer for
                console.table(unirMatrices);
                verMatriz(unirMatrices);
            }
            else{
                matrizPIP.textContent="las filas y/o columnas son diferentes, no hay matriz invers, ";
            }//para que la matriz exista debe er cuadrada 2x2 3x3 4x4...
        });//matricespares evento
        matrizImpares.addEventListener("change",function matrizImpares() {
            //matrizPIP.textContent="clic en impares";
        });
        matrizPrimos.addEventListener("change",function matrizPrimos() {
            //matrizPIP.textContent="clic en primos "
        });
    }//if para entero positivo
    else if (num1!=Math.abs(Math.trunc(num1))) {
        alerta.style.color="orange";
        alerta.textContent="El valor 1 no es entero positivo";
    }
    else if (num2!=Math.abs(Math.trunc(num2))) {
        alerta.style.color="orange";
        alerta.textContent="El valor 2 no es entero positivos";
    }//otra forma de hacer o mejorar es:
    //math.abs(math.trunc(num1))
    //con el math.abs=valor absoluto (o sea positivo)
    //con el math.trunc=elimino los decimales
    //creo que lo cambiare si no funciona
});
function  matriz(num1,num2) {
    let matriz=[];//aca lo estoy iniciando un array vacio
    let mostrar="";
    for (let index = 0; index < num1; index++) {//filas
        matriz[index]=[];
        for (let index2 = 0; index2 < num2; index2++) {//columnas
            let random=Math.trunc(Math.random()*2);//pa que me salga del 0 al 1
            matriz[index][index2]=0;
        }//segundo for
    }//primer for
    //para mostrar la matriz hare:
    for (let index = 0; index < matriz.length; index++) {
        for (let index2 = 0; index2 < matriz[index].length; index2++) {
            //console.log(matriz[index][index2]+",");
            mostrar+=matriz[index][index2]+" ";
        }//segundo for
        //console.log(" ");
        mostrar+="\n";
    }//primer for
    mostrarMatriz.innerText=mostrar;
    //console.log(mostrar);
};//matriz con ceros
function verMatriz(matriz) {
    let mostrar="";
    for (let index = 0; index < matriz.length; index++) {
        for (let index2 = 0; index2 < matriz[index].length; index2++) {
            mostrar+=matriz[index][index2]+" ";
        }
        mostrar+="\n";
    }
    matrizPIP.innerText=mostrar;
}
