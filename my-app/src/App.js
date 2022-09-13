import { Empleado } from "./Empleado";

const ejemplo = {
  imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScb6E3jd5-WKd6Zx14WkFm-qwdFlEoFd2vqg&usqp=CAU',
  cargo: 'Test',
  desde: '11/09/2001',
  ubicacion: 'Envigado',
  descripcion: 'Ricas hamburguesas'
}

const ejemplos = [
  {
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScb6E3jd5-WKd6Zx14WkFm-qwdFlEoFd2vqg&usqp=CAU',
    cargo: 'Test',
    desde: '11/09/2001',
    ubicacion: 'Envigado',
    descripcion: 'Ricas hamburguesas'
  },
  {
    imagen: 'https://codigoespagueti.com/wp-content/uploads/2022/04/Shanks-aparece-en-un-nuevo-boceto-de-la-pelicula-One-Piece-Film-RED.jpg',
    cargo: 'Test',
    desde: '11/09/2001',
    ubicacion: 'Konohagakure',
    descripcion: 'Genin'
  }
]

function App() {
  return (
    <div className="App">
      {ejemplos.map((item, i) => <Empleado datos={item} />)}
    </div>
  );
}

export default App;
