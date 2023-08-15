const listaNumeros = document.getElementById("listaNumeros");

// Hacer la lista de numeros del 1 al 100
let arrayNumeros = [];

for (let i = 0; i < 100; i++) {
    arrayNumeros.push(i + 1);
}

console.log(arrayNumeros);

// Evaluar condiciones y almacenar los nuevos valores en otro array
const arrayResultados = arrayNumeros.map((numero) => {
    if (numero % 5 == 0 && numero % 3 == 0) {
        return "FizzBuzz";
    }

    else if (numero % 5 == 0) {
        return "Buzz";
    }

    else if (numero % 3 == 0) {
        return "Fizz";
    }

    else {
        return numero;
    }
});

console.log(arrayResultados);

// Dibujar los resultados en el documento HTML
arrayResultados.forEach((resultado, resultadoIndex) => {
    const newLi = document.createElement("li");
    if (!isNaN(resultado)) {
        newLi.innerHTML = resultado;

    }
    else {
        newLi.innerHTML = `valor: ${arrayNumeros[resultadoIndex]}, convertido a "${resultado}"`;
    }

    listaNumeros.appendChild(newLi);
})

console.log(arrayResultados);