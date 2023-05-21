import { Component } from "react";

const styles = {
    titulo : {
        marginBottom: '50px' // margen inferior de 50 pixeles
    }
}
class Titulo extends Component{
    render(){
        return(
            <h1 style={styles.titulo}>Tienda.</h1>
        )
    }
}
export default Titulo;