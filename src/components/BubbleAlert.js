import { Component } from "react";
/* el metodo get number con lo siguiente
getNumber(n){
        if (!n){return ''}
esta diciendo que si no se encuentra definido n que devuelva un string vacio
*/

const styles = {
    bubbleAlert: {
        backgroundColor: '#E43F5A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px', // horizontal , vertical
        fontSize: '1rem',
        width: '20px',

    }
}
class BubbleAlert extends Component{
    getNumber(n){
        if (!n){return ''}
        return n > 9 ? '9+' : n // esta linea indica que si n es mayor a 9 que devuelva 9+ sino que devuelva n

    }
    render(){
        const { value } = this.props
        /*cuando llamamos al metodo getnumber lo que hacemos es pasarle las propiedades
        * primero generando una constante que tiene las props (value) y luego se las pasamos directo al metodo
        * la constante se debe pasar con destructuring*/
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}
export default BubbleAlert;