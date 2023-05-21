import { Component} from "react";

/*con this props childen estamos imprimiendo los children del componente layout que
* esta dentro de layout en App.js
* con el primer div nos encargaremos de centrar t odo el contenido
*  para luego en el segundo div darle un ancho de 1200 pixel
* con el siguiente style aplicado al primer div
*  layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
 el primer div envia todos los elementos cargados a la izquierda
 * para esto debemos pasar la propiedad flex direction e indicar la direccion */

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container :{
        /* esta propiedad lo que hace es crear un ancho fijo de 1200 pixeles y asi centar los
        elementos en de productos en un ancho fijo esta propiedad se la debemos pasar al div
        que se encuentra mas adentro de esta manera los nuevos elementos comenzaran a agregarse
         desde la izquierda y no del centro */
        width: '1200px'
    }

}
class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout;