import { Component} from "react";
const styles = {
    button: {
        backgroundColor: '#0A283E', // color del boton
        color: '#fff', // color de las letras
        padding: '15px 20px', // separacion de las letras con los bordes vertical y horizontal
        border: 'none', // eliminando el borde natural que tienen los botones
        borderRadius: '10px', // bordes redondeados
        cursor: 'pointer' // cursor de la mano al estar sobre el boton


    }
}
class Button extends Component{
    render(){

        return(
            <button style={styles.button} {...this.props}  /> // aqui estamos pasando todas las propiedades que le pasemos a button

        )
    }
}
export default Button;