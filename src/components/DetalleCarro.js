import { Component } from "react";

const styles = {
    detallecarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '10px',
        width: '300px',
        right: 50,
        padding: '10px 20px'
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStyleType: 'none', // para eliminar los puntos de las listas
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px', //horizontal , vertical
        borderBottom: 'solid 1px #aaa'
    },
}

class DetalleCarro extends Component {
    render() {
        const { carro } = this.props
        console.log(carro)
        return(
            <div style={styles.detallecarro}>
                <ul style={styles.ul} >
                    {carro.map(x =>
                        <li key={x.nombre} style={styles.producto}>
                        <img alt={x.name} src={x.img} width='50' height='32' />
                            {x.nombre}  <span>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
            </div>

        )
    }
}
export default DetalleCarro;