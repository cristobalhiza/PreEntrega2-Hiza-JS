const articulo = {
    nombre: "",
    cantidad: 1,
    precio: 0,
  };
  
  const listaDeCompras = {
    articulos: [],
  };
  let total = 0;

  function calcularTotal() {
    for (const articulo of listaDeCompras.articulos) {
      total += articulo.cantidad * articulo.precio;
    }
    return total;
  }

  function agregarArticulo() {
    let nombre;
    do {
      nombre = prompt("Ingresa el nombre del artículo:");
    } while (!nombre);
  
    let cantidad;
    do {
      cantidad = parseInt(prompt("Ingresa la cantidad del artículo:"));
    } while (isNaN(cantidad) || cantidad <= 0);
  
    let precio;
    do {
      precio = parseFloat(prompt("Ingresa el precio del artículo:"));
    } while (isNaN(precio) || precio <= 0);
  
    const nuevoArticulo = {...articulo};
    nuevoArticulo.nombre = nombre;
    nuevoArticulo.cantidad = cantidad;
    nuevoArticulo.precio = precio;
  
    listaDeCompras.articulos.push(nuevoArticulo);
  }
  
  function mostrarLista() {
    let listaString = "Tu lista de compras:\n";
    if (listaDeCompras.articulos.length === 0) {
      listaString += "¡La lista está vacía!";
    } else {
      for (const articulo of listaDeCompras.articulos) {
        listaString += `- ${articulo.nombre} (x${articulo.cantidad}) - $${articulo.precio}\n`;
      }
      const total = calcularTotal();
      listaString += `Total: $${total}`;
    }
    alert(listaString);
  }
  
  function eliminarArticulo() {
    const nombre = prompt("Ingresa el nombre del artículo a eliminar:");
    const indice = listaDeCompras.articulos.findIndex((articulo) => articulo.nombre === nombre);
    if (indice !== -1) {
      listaDeCompras.articulos.splice(indice, 1);
      alert(`El artículo "${nombre}" ha sido eliminado.`);
    } else {
      alert(`No se encontró ningún artículo con el nombre "${nombre}".`);
    }
  }
  
  function modificarArticulo() {
    const nombre = prompt("Ingresa el nombre del artículo a modificar:");
    const indice = listaDeCompras.articulos.findIndex((articulo) => articulo.nombre === nombre);
    if (indice !== -1) {
      let cantidad;
      do {
        cantidad = parseInt(prompt("Ingresa la nueva cantidad del artículo:"));
      } while (isNaN(cantidad) || cantidad <= 0);
  
      let precio;
      do {
        precio = parseFloat(prompt("Ingresa el nuevo precio del artículo:"));
      } while (isNaN(precio) || precio <= 0);
  
      listaDeCompras.articulos[indice].cantidad = cantidad;
      listaDeCompras.articulos[indice].precio = precio;
      alert(`El artículo "${nombre}" ha sido modificado.`);
    } else {
      alert(`No se encontró ningún artículo con el nombre "${nombre}".`);
    }
  }
  
  while (true) {
    const opcion = parseInt(prompt(`      Bienvenido a Organiza tus Compras App

      Marque la opción que desee realizar:

      1. Agregar artículo
      2. Mostrar lista
      3. Eliminar artículo
      4. Modificar artículo
      5. Salir
  
      Ingresa una opción:`
    ));
  
    switch (opcion) {
      case 1:
        agregarArticulo();
        break;
      case 2:
        mostrarLista();
        break;
      case 3:
        eliminarArticulo();
        break;
      case 4:
        modificarArticulo();
        break;
      case 5:
        alert(`Su precio total de compras es: $${total} ¡Hasta luego!`);
        break;
      default:
        alert("Opción inválida. Ingresa un número del 1 al 5.");
    }
  
    if (opcion === 5) {
      break;
    }
  } 
  `Total: $${total}`