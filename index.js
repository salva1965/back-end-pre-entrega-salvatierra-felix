// ------- tomar argumentos ----------------
let [,,comando,recurso,...parmetros] = process.argv;
// ------ validar may,minsc --------------

comando = comando.toUpperCase();
recurso = recurso.toLowerCase();
//-------- crear un nuevo producto -----------------------------------
if (comando == "POST" && recurso == "products") {
    const [title,price,category]= parmetros;
    const product = { title,price,category};

    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    })
        .then(response => response.json())
        .then(data => console.log(data));
}
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
