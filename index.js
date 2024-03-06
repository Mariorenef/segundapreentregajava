// FUNCIONES

//   Función para saludo inicial
function saludo() {
    console.log("Hola, Bienvenido a Librería JS \n\nIngresa tu nombre por favor\n\n");
    const nombreUsuario = prompt("Hola, Bienvenido a Javascript \n\nIngresa tu nombre por favor");
    console.log("Hola " + nombreUsuario + " \n\n");
    alert("Hola " + nombreUsuario + " \n\nPor favor presiona aceptar para ver el menú");
}

//   Función para menú principal
function menuPrincipal() {
    let opcion = 0;
    do {
        console.log("Ingrese del 1 al 5 según la opción que desea realizar:\n\n1 - Ver Libros disponibles\n2 - Mostrar carrito de compra\n3 - Cancelar la compra\n4 - Realizar la compra\n5 - Salir\n\n");
        opcion = parseInt(prompt("Ingrese del 1 al 5 según la opción que desea realizar:\n\n1 - Ver Libros disponibles\n2 - Mostrar carrito de compra\n3 - Cancelar la compra\n4 - Realizar la compra\n5 - Salir"));

        if (opcion >= 1 && opcion <= 5) {
            return opcion;
        } else {
            console.log("Valor ingresado: " + opcion + "\nEl valor ingresado es incorrecto, por favor elija una de las opciones disponibles\n\n");
            alert("Valor ingresado: " + opcion + "\nEl valor ingresado es incorrecto, por favor elija una de las opciones disponibles\n\n");
        }
    } while (opcion != 1 || opcion != 2 || opcion != 3 || opcion != 4 || opcion != 5);

}
//   Función para menú de libros
function menuSagas() {
    console.log("\nOpción elegida: (1 - Ver Libros disponibles)\n");
    alert("Opción elegida: (1 - Ver Libros disponibles)");

    do {
        console.log(`\nElija del 1 al 6 la colección que desea agregar al carrito:\n\nSagas disponibles:\n\n1 - ${Libros[0].nombre} Precio: $ ${Libros[0].precio} Stock: ${Libros[0].stock} \n2 - ${Libros[1].nombre} Precio: $ ${Libros[1].precio} Stock: ${Libros[1].stock} \n3 - ${Libros[2].nombre} Precio: $ ${Libros[2].precio} Stock: ${Libros[2].stock} \n4 - ${Libros[3].nombre} Precio: $ ${Libros[3].precio} Stock: ${Libros[3].stock} \n5 - ${Libros[4].nombre} Precio: $ ${Libros[4].precio} Stock: ${Libros[4].stock} \n6 - Volver al menú principal`);
        let opcionSagas = parseInt(prompt(`Elija del 1 al 6 la colección que desea agregar al carrito:\n\nSagas disponibles:\n\n1 - ${Libros[0].nombre} Precio: $ ${Libros[0].precio} Stock: ${Libros[0].stock} \n2 - ${Libros[1].nombre} Precio: $ ${Libros[1].precio} Stock: ${Libros[1].stock} \n3 - ${Libros[2].nombre} Precio: $ ${Libros[2].precio} Stock: ${Libros[2].stock} \n4 - ${Libros[3].nombre} Precio: $ ${Libros[3].precio} Stock: ${Libros[3].stock} \n5 - ${Libros[4].nombre} Precio: $ ${Libros[4].precio} Stock: ${Libros[4].stock} \n6 - Volver al menú principal`));
        if (opcionSagas >= 1 && opcionSagas <= 6) {
            return opcionSagas;
        } else {
            console.log("Valor ingresado: " + opcionSagas + "\nEl valor ingresado es incorrecto, por favor elija una de las opciones disponibles\n\n");
            alert("Valor ingresado: " + opcionSagas + "\nEl valor ingresado es incorrecto, por favor elija una de las opciones disponibles\n\n");
        }
    } while (opcionSagas != 1 || opcionSagas != 2 || opcionSagas != 3 || opcionSagas != 4 || opcionSagas != 5 || opcionSagas != 6);
}
//   Funcion para cancelar la compra
function borrarCarrito() {
    console.log("\nDesea cancelar la compra? Escriba 'SI' para salir o 'NO' para para volver al menú\n");
    preguntaCancelarCompra = prompt("\nDesea cancelar la compra? Escriba 'SI' para salir o 'NO' para para volver al menú\n");
    preguntaCancelarCompra = preguntaCancelarCompra.toUpperCase();

    console.log("\nLa opción ingresada fue: " + preguntaCancelarCompra);

    if (preguntaCancelarCompra === "SI") {
        console.log("\nCancelando...\n");
        alert("Cancelando...");

        while (Carrito.length > 0) {
            Carrito.pop();
        };

        console.log("\nCompra Cancelada con exito\n");
        alert("Compra Cancelada con exito");
    } else if (preguntaCancelarCompra === "NO") {
        console.log("\nVolviendo al menú principal\n");
        alert("\nVolviendo al menú principal\n");
    } else {
        console.log("\nLa opción ingresada es incorrecta\n");
        alert("\nLa opción ingresada es incorrecta\n");
    }
}
//   Funcion ver total a pagar
function precioTotal() {
    let totalAPagar = 0;
    for (const producto of Carrito) {
        totalAPagar = totalAPagar + (producto.precio * producto.Cantidad);
    }

    console.log("Total de la compra = $ " + totalAPagar);
    alert(`Total de la compra = $ ${totalAPagar}`);
}
//   Funcion para actualizar stock de productos luego de realizada la compra
function ActualizarStock() {
    Libros.forEach((posicion) => {
        Carrito.forEach((posicionCarrito) => {
            if (posicion.nombre == posicionCarrito.nombre) {
                posicion.stock = (posicion.stock - posicionCarrito.Cantidad);
            }
        });

    });
}
// ------------------------------------------------------------------------------
// ARRAYS Y OBJETOS 
// MI PROYECTO AUN NO SE SI ORIENTARLO A CARRITO DE COMPRAS O CALCULADORA O PRESTAMOS ESTOY EN DUDA

//   Objetos
class Saga {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    DescontarDelStock(cantidadADescontar) {
        this.stock = this.stock - cantidadADescontar;
    }
}

//   Arrays
const Libros = [
    new Saga("Saga Harry Potter", 10000, 20),
    new Saga("Saga Maze Runner", 7000, 30),
    new Saga("Saga Sherlock Holmes", 15000, 10),
    new Saga("Saga Stephen King", 20000, 10),
    new Saga("Saga Julio Verne", 13000, 20),
]

const Carrito = [];

// ----------------------------------------------------------------------------

// Programa principal

// Variables
let opcionElegida = 0;
let opcionSagaElegida = 0;
let cantidadQueVaAComprar = 0;
let arrayEnTextoParaUnSoloAlert = "";
let salir = false;

let preguntaCancelarCompra = "NO";
let preguntaRealizarCompra = "NO";
let preguntaSalir = "NO";


saludo();

do {
    opcionElegida = menuPrincipal();

    switch (opcionElegida) {
        case 1:
            opcionSagaElegida = menuSagas();
            if (opcionSagaElegida >= 1 && opcionSagaElegida <= 5) {
                switch (opcionSagaElegida) {
                    case 1:
                        cantidadQueVaAComprar = parseInt(prompt("Ingrese la cantidad que desea llevar: "));
                        Carrito.push({ nombre: Libros[0].nombre, precio: Libros[0].precio, Cantidad: cantidadQueVaAComprar });
                        console.log("\nAgregado al carrito\n");
                        alert("Agregado al carrito");
                        break;
                    case 2:
                        cantidadQueVaAComprar = parseInt(prompt("Ingrese la cantidad que desea llevar: "));
                        Carrito.push({ nombre: Libros[1].nombre, precio: Libros[1].precio, Cantidad: cantidadQueVaAComprar });
                        console.log("\nAgregado al carrito\n");
                        alert("Agregado al carrito");
                        break;
                    case 3:
                        cantidadQueVaAComprar = parseInt(prompt("Ingrese la cantidad que desea llevar: "));
                        Carrito.push({ nombre: Libros[2].nombre, precio: Libros[2].precio, Cantidad: cantidadQueVaAComprar });
                        console.log("\nAgregado al carrito\n");
                        alert("Agregado al carrito");
                        break;
                    case 4:
                        cantidadQueVaAComprar = parseInt(prompt("Ingrese la cantidad que desea llevar: "));
                        Carrito.push({ nombre: Libros[3].nombre, precio: Libros[3].precio, Cantidad: cantidadQueVaAComprar });
                        console.log("\nAgregado al carrito\n");
                        alert("Agregado al carrito");
                        break;
                    case 5:
                        cantidadQueVaAComprar = parseInt(prompt("Ingrese la cantidad que desea llevar: "));
                        Carrito.push({ nombre: Libros[4].nombre, precio: Libros[4].precio, Cantidad: cantidadQueVaAComprar });
                        console.log("\nAgregado al carrito\n");
                        alert("Agregado al carrito");
                        break;
                }
            }
            break;
        case 2:
            console.log("\nOpción elegida: (2 - Mostrar carrito de compra)\n");
            alert("Opción elegida: (2 - Mostrar carrito de compra)");

            arrayEnTextoParaUnSoloAlert = "";
            Carrito.forEach((producto) => {
                console.log(producto);
                arrayEnTextoParaUnSoloAlert = ` ${arrayEnTextoParaUnSoloAlert} \nSaga: ${producto.nombre} Precio: ${producto.precio} Cantidad: ${producto.Cantidad}`;
            });
            alert(arrayEnTextoParaUnSoloAlert);
            precioTotal();

            break;
        case 3:
            console.log("\nOpción elegida: (3 - Cancelar la compra)\n");
            alert("Opción elegida: (3 - Cancelar la compra)");

            borrarCarrito();
            break;
        case 4:
            console.log("\nOpción elegida: (4 - Realizar la compra)\n");
            alert("Opción elegida: (4 - Realizar la compra)");

            precioTotal();
            console.log("\nDesea realizar la compra? Escriba 'SI' para seguir o 'NO' para para volver al menú\n");
            preguntaRealizarCompra = prompt("\nDesea realizar la compra? Escriba 'SI' para seguir o 'NO' para para volver al menú\n");
            preguntaRealizarCompra = preguntaRealizarCompra.toUpperCase();

            console.log("\nLa opción ingresada fue: " + preguntaRealizarCompra);

            if (preguntaRealizarCompra === "SI") {
                console.log("\nProcesando...\n");
                alert("Procesando...");
                console.log("\nCompra Realizada con exito\n");
                alert("Compra Realizada con exito");

                ActualizarStock();

                while (Carrito.length > 0) {
                    Carrito.pop();
                };
            } else if (preguntaRealizarCompra === "NO") {
                console.log("\nVolviendo al menú principal\n");
                alert("\nVolviendo al menú principal\n");
            } else {
                console.log("\nLa opción ingresada es incorrecta\n");
                alert("\nLa opción ingresada es incorrecta\n");
            }

            break;
        case 5:
            console.log("\nDesea salir? Escriba 'SI' para salir o 'NO' para para volver al menú\n");
            preguntaSalir = prompt("\nDesea salir? Escriba 'SI' para salir o 'NO' para para volver al menú\n");
            preguntaSalir = preguntaSalir.toUpperCase();

            console.log("\nLa opción ingresada fue: " + preguntaSalir);

            if (preguntaSalir === "SI") {
                console.log("\nSaliendo...\n");
                alert("\nSaliendo...\n");
                salir = true;
            } else if (preguntaSalir === "NO") {
                console.log("\nVolviendo al menú principal\n");
                alert("\nVolviendo al menú principal\n");
            } else {
                console.log("\nLa opción ingresada es incorrecta\n");
                alert("\nLa opción ingresada es incorrecta\n");
            }

            break;
        default:
            console.log("\nOcurrió un ERROR en la ejecución\n");
            alert("\nOcurrió un ERROR en la ejecución\n");
            break;
    }

} while (salir != true);