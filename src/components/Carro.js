import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetalleCarro from "./DetalleCarro";

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
        const { carro, esCarroVisible, mostrarCarro } = this.props // aqui estamos recibiendo el carro que viene de app.js
        const cantidad = carro.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0)
        return (
            <div >
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad} />
                        : null}

                </span>

                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetalleCarro carro={carro} /> : null}


            </div>
        )
    }
}

export default Carro;