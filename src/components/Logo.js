import { Component } from 'react';
const styles = {
    logo: {
        fontWeight: '700', // letra gruesa
        fontSize: '2rem', // tamaño de la letra

    }
}
class Logo extends Component {
    render() {
        return (
           <div style={styles.logo}>
               Tiendita.
           </div>
        )
    }
}

export default Logo;