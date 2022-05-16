function saltarLinea() {
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}
function calcularImc(peso,altura) {
    return (peso / (altura * altura));
}
nombre = prompt("informe su nombre");
pesoInformado = prompt(nombre + ", informe su peso");
alturaInformado = prompt(nombre + ", informe su altura");

imcCalculado = calcularImc(pesoInformado,alturaInformado);

imprimir(nombre + ", su IMC calculado es:" + imcCalculado);

if(imcCalculado < 18){
    imprimir("IMC: Debajo de lo recomendado");
}

if(imcCalculado >= 18 && imcCalculado < 25){
    imprimir("IMC: Recomendado");
}

if(imcCalculado >= 25 && imcCalculado < 30){
    imprimir("IMC: Sobrepeso");
}

if(imcCalculado >= 30){
    imprimir("IMC: Obesidad");
}
