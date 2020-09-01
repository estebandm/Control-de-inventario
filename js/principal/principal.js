(function () {
    const productos = document.getElementById('productos');
    const proveedores = document.getElementById('proveedores');
    const ventas = document.getElementById('ventas');
    const pedidos = document.getElementById('pedidos');


    let agregarElementos = function () {

    }

    /*     let siguientePagina = function (e) {
    
            if (e === 'productos') {
                productos.setAttribute('href', 'categoria.html');
                alert('entre');
                const buscar = document.getElementById('buscar');
                console.log('buscar');
            } else if (e === 'proveedores') {
                proveedores.setAttribute('href', 'categoria.html');
            } else if (e === 'ventas') {
                ventas.setAttribute('href', 'categoria.html');
            } else if (e === 'pedidos') {
                pedidos.setAttribute('href', 'categoria.html');
            }
        }
    
     */

    let saludo = function () {
        alert('entre');
    }

    let siguientePagina = function () {
        productos.setAttribute('href', 'categoria.html');
        setTimeout(saludo, 3000);
    }

    productos.addEventListener('click', siguientePagina);

    /*     productos.addEventListener('click', siguientePagina('productos'));
        proveedores.addEventListener('click', siguientePagina('proveedores'));
        ventas.addEventListener('click', siguientePagina('ventas'));
        pedidos.addEventListener('click', siguientePagina('pedidos')); */
}())