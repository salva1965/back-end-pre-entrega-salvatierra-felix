let [,,comando,recurso] = process.argv;


comando = comando.toUpperCase();
recurso = recurso.toLowerCase();

if (comando == "GET" && recurso == "products") {
    const respuesta = await fetch('https://fakestoreapi.com/products');
    const datos = await respuesta.json();
    console.log(datos);
}