import {Component} from "react";
import Producto from "./Producto";
/*creamos la clase productos que extiende de component
* el metodo render
* creamos una constante que tiene los productos y la funcion agregar al carro que es igual a las propiedades
* dentro de un div iteramos por todos los productos usando la funcion map
* a la funcion map le pasamos un componente de producto que debemos crear
* y a producto le pasamos la funcion agregar al carro que no esta haciendo nada en este momento
* una key que sera el nombre del producto y producto que contendra todos los productos
* lo que estamos haciendo aqui es el componente producto imprime muchas veces el componente producto
* ahora en este punto tuvemos que volver al componente productos para ordenarlos ya que se encuentran listados de abajo
* hacia arriba pero los necesitamos de izquierda a derecha lamentablemente lo haremos de manera inline*/

const styles = {
    productos: {
        display: 'flex', // flex es para que la muestre de una manera customizada y no de manera de arriba hacia abajo
        flexDirection: 'row', // row es para que la muestre de izquierda a derecha
        justifyContent: 'space-between' // space-between es para que los separe
    }
}
class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return(
            <div style={styles.productos}>
                {productos.map(productos =>
                <Producto
                    agregarAlCarro= {agregarAlCarro}
                    key={productos.nombre}
                    producto={productos}
                />)}
            </div>


        )
    }
}

export default Productos;