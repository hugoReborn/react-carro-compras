import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

/* en el componente de carro es donde posicionamos la burbuja
* a bubble alert le pasamos value que viene de su clase para que muestre distintos valores */

const styles = {
    carro: {
        backgroundColor: '#55d7d2',
        color: '#fff',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '15px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.2)',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative', // posision relativa al div que lo envuelve
        left: 12, // posicion a la izquierda
        top: 20, // posicion arriba
    }
}
class Carro extends Component {
    render() {
        return (
            <div >
                <span style={styles.bubble}>
                    <BubbleAlert value={10}/>
                </span>

                <button style={styles.carro}>
                    Carro
                </button>

            </div>
        )
    }
}

export default Carro;