import {Component} from "react";
import Button from "./Button";
/* Luego que separamos los productos y los listamos de manera ordenada de izquierda a derecha
* comenzaremos a editar el css para darle estilo a los productoe n singular
* ya que todos los productos parecieran que tienen una tarjeta les pondremos un boton de agregar al carro
* El texto de agregar al carro seria la propiedad children que le estamos pasando dentro del boton
* */

const styles = {
    producto:{
        border: 'solid 1px #eee',
        //orden 0 pixeles a la derecha 5 px hacia abajo blur de 5 px rgb negro y el 0.1 y es que vea un 10%
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width:'30%', // ancho de las tarjetas
        padding : '10px 15px' ,// separacion del contenido con los bordes
        borderRadius: '10px' // bordes redondeados de las tarjetas
    },
    img: {
        width: '100%', // con esta propiedad decimos que la imagen use el 100% del tamaño del espacio elemento padre


    }

}
class Producto extends Component {

    render() {
        const { producto, agregarAlCarro } = this.props;
        console.log(this.props) // aca imprimimos las propiedades para ver si estan apareciendo
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.nombre} width={'150px'}/>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Button onClick={ () => agregarAlCarro(producto)} >
                  Agregar al Carro
                </Button>
            </div>
        )
    }
}
export default Producto;