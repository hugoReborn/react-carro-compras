import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
    navbar: {
        // con estas configuraciones hacemos que el navbar se encuentre centrado verticalmente
        // con respecto al div que lo contiene
        display: 'flex', // flex hace mas facil distrbuir el contenido
        flexDirection: 'row', // row es para que la muestre de izquierda a derecha
        alignItems: 'center', // alinea los elementos al centro
        height: '100px', // altura de 100 pixeles
        justifyContent: 'space-between', // space-between es para que los separe uno a la derecha
        // otro a la izquierda
        position: 'relative', // posicion relativa
        padding: '0 50px', // padding de 0 pixeles arriba y abajo y 50 pixeles a la izquierda y derecha
        boxShadow: '0 2px 3px rgb(0,0,0,0.2)' // 0 desplazamiento hor 2 de vertical 3 px de blur y el color rgb con 0.1 de opacidad

    }
}
class Navbar extends Component{
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carro
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={mostrarCarro}
                />

            </nav>
        )
    }
}
export default Navbar;