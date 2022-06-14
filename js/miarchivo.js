// 01) Declaro un array que contenga las condiciones fiscales con los que voy a trabajar mi simulador:
const condicionFiscal = ["Responsable Inscripto","Monotribustista"];
console.log(condicionFiscal)
console.log(condicionFiscal.length)

// 02) Agrego otra condición fiscal:
condicionFiscal.push("No alcanzado");
console.log(condicionFiscal)
console.log(condicionFiscal.length)

// 03) Elimino la condición fiscal agregada recientemente:
condicionFiscal.pop()
console.log(condicionFiscal)

// 04) Reverso los elementos para que queden por orden ascendente
condicionFiscal.reverse()
console.log(condicionFiscal)

// 05) Agrego otra condición fiscal al comienzo del array:
condicionFiscal.unshift("Consumidor Final");
console.log(condicionFiscal)
console.log(condicionFiscal.length)

// 06) Consulto si la condición 'Exento' se encuentra incluída entre los elementos del array:
console.log(condicionFiscal.indexOf("No alcanzado"))

// 07) Verifico que la condición fiscal 'Consumidor Final' se encuentre incluída:
console.log(condicionFiscal.includes("Consumidor Final"))