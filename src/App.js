import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Titulo from './components/Titulo';
import Navbar from './components/Navbar';
/* creamos una clase que extiende de component
* un estado inicial que contiene productos
* los productos seran objetos que tendran un nombre
* creamos un componente productos a la que le pasamos la funcion agregar al carro que por el momento no hace nada
* luego debemos pasarle todos los productos que queremos imprimir
* importamos el componente layout que todavia no hemos creado
* creamos este componente layout para que nuestros componentes no usen toda la pantalla
* ahora lo que queremos es agregar un nuevo componente de titulo para esto tuvimos que volver al componente
* app y antes de los productos debemos crear un nuevo componente llamado titulo
* regresamos a app ya que ahora necesitamos crear una barra de navegacion
*
* la logica de carro es se agrega uno de los productos y se agrega la propiedad cantidad
* para luego cada vez que se aprete el boton cambie la propiedad de cantidad y no copiar muchas veces el producto
*  */
class App extends Component {
  state = {
    productos:[
      {nombre: 'Tomate', precio: '$ 1.500', img: '/productos/tomate.jpeg'},
      {nombre: 'Lechuga', precio: '$ 500', img: '/productos/lechuga.jpg'},
      {nombre: 'Tomate Jumbo', precio: '$ 5.000', img: '/productos/tomate.jpeg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
      const { carro } = this.state
      if(carro.find(x => x.nombre === producto.nombre)){ // esta linea indica que si el nombre existe al buscarlo realizamos...
         const newCarro = carro.map(x => x.nombre === producto.nombre
         ? ({
                 ...x,  // copiamos el elemento que recibimos
                 cantidad: x.cantidad + 1 // aumentamos su cantidad
             })
         : x) // si no es devolvemos el elemento como estaba
          return this.setState({ carro: newCarro })

      }
      return this.setState({
            carro: this.state.carro.concat({
                ...producto,
            cantidad: 1,
            })
      })

  }
// debemos pasar mostrar carro a navbar para que navbar se lo pase a carro y carro lo muestre
  mostarCarro = () => {
      if(!this.state.carro.length === 0){
          return
      }
      this.setState({esCarroVisible: !this.state.esCarroVisible}) // esta linea indica que si es falso se vuelve
      // verdadero y viceversa
  }

  render() {
    const { esCarroVisible } = this.state

    return (
     <div>
         <Navbar carro={this.state.carro}
                 esCarroVisible={esCarroVisible}
                 mostrarCarro={this.mostarCarro}/>
         <Layout>
             <Titulo/>
             <Productos
                 agregarAlCarro={this.agregarAlCarro}
                 productos = {this.state.productos}
             />
         </Layout>


     </div>
    );
  }
}

export default App;
