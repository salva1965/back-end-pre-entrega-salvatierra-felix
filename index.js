// ^^----- tomar argumentos ----------------
let [,,comando,recurso] = process.argv;
// ------ validar may,minsc --------------

comando = comando.toUpperCase();
recurso = recurso.toLowerCase();
// ------ traer productos de Fakestoreapi ------------------
if (comando == "GET" && recurso == "products") {
    const respuesta = await fetch('https://fakestoreapi.com/products');
    const datos = await respuesta.json();
    console.log(datos);
}
//-------- mostrar un producto por id ------------------------------------
//-------- toma de argumento y validacion a entro y > 0----
const match = process.argv.find((arg) => /^products\/\d+$/.test(arg));
const id = match ? match.split("/")[1] : "--Identificador no valido";
if (id == 0) {
    console.log("--Identificador no valido");
} else {
    fetch('https://fakestoreapi.com/products/' + id)
        .then(response => response.json())
        .then(data => console.log(data));
}
