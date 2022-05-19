class ProductoController extends ProductoModel {

    constructor() {
        super()
        this.guardarProducto = this.guardarProducto.bind(this)
    }

    async obtenerProductos() {
        this.productos = await productoService.obtenerProductosService()
        return this.productos
    }

    async guardarProducto(producto) {
        let productoGuardado = await productoService.guardarProductoService(producto)
        console.log(productoGuardado)

        this.productos.push(productoGuardado)

        renderTablaAlta(null, this.productos)
        
        setTimeout(function(){
            let botonAgregar = document.getElementById('producto-agregado-borrado-actualizado')
        
            botonAgregar.style.display = 'flex'
            botonAgregar.innerHTML = 'Se agregó correctamente'
            setTimeout(function(){
                botonAgregar.style.display = 'none'
            }, 2000);
        }, 2000);

    }

    async actualizarProducto(id) {
        console.log('Producto actualizado', id)

        let producto = formularioAlta.leerProductoIngresado()
        formularioAlta.limpiarFormulario()

        let productoActualizado = await productoService.actualizarProductoService(id,producto)
        console.log(productoActualizado)

        let index = this.productos.findIndex(producto => producto.id == productoActualizado.id)
        this.productos.splice(index,1,productoActualizado)

        renderTablaAlta(null, this.productos)

        setTimeout(function(){
            let botonActualizar = document.getElementById('producto-agregado-borrado-actualizado')
        
            botonActualizar.style.display = 'flex'
            botonActualizar.innerHTML = 'Se actualizó correctamente'
            setTimeout(function(){
                botonActualizar.style.display = 'none'
            }, 2000);
        }, 2000);

        


    }

    async borrarProducto(id) {
        console.log('borrarProducto', id)

        let productoBorrado = await productoService.borrarProductoService(id)
        
        let index = this.productos.findIndex(producto => producto._id == productoBorrado._id)
        this.productos.splice(index,1)

        renderTablaAlta(null, this.productos)

        

        setTimeout(function(){
            let botonBorrar = document.getElementById('producto-agregado-borrado-actualizado')
        
            botonBorrar.style.display = 'flex'
            botonBorrar.innerHTML = 'Se borró correctamente'
            setTimeout(function(){
                botonBorrar.style.display = 'none'
            }, 2000);
        }, 1000);

    }
}

const productoController = new ProductoController()