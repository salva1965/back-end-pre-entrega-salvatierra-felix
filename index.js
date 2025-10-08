// ----- tomar argumentos ----------------
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