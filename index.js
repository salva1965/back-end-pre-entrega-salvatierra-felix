// // ------- tomar argumentos ----------------
 let [,,comando,recurso,...parametros] = process.argv;
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

if (comando == "GET" && recurso.startsWith("products/")) {
    let id = recurso.split("/")[1];
    id = parseInt(id);
    if (isNaN(id) || id < 1) {
        console.log("--Identificador no valido");
    } else {
        
        fetch('https://fakestoreapi.com/products/' + id)
            .then(response => response.json())
            .then(data => console.log(data));
    }
   
}
//-------- Agregar un nuevo producto -----------------------------------

if (comando == "POST" && recurso == "products") {
    
    const [title, price, category] = parametros;
    const product = { title, price, category };

    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => console.log(data));
}
//----------- Eliminar un producto ---------------------------------------

if (comando == "DELETE" && recurso.startsWith("products/")) {
    let id = parseInt(recurso.split("/")[1]);
    
    if (isNaN(id) || id < 1) {
        console.log("--Identificador no valido");
    } else {

        fetch('https://fakestoreapi.com/products/' + id , {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

}