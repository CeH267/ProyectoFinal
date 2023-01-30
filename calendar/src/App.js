
import Header from "./components/Header";
import Items from "./components/Items";

function App() {

  const items = [
   {
    id: 1,
    title: 'Desarrollando proyecto con laravel',
    category: 'Desarrollo y Programacion',
    img: 'img',
    day: 'Lun',
    time: '18:00'
   },
   {
    id: 2,
    title: 'Apendiendo React',
    category: 'Desarrollo y Programacion',
    day: 'Mar',
    time: '09/01/1999'    
   },
   {
    id: 3,
    title: 'Introduccion a Data Science con Python',
    category: 'Desarrollo y Programacion',
    day: 'mie',
    time: '21/01/1999'
   },
    {
    id: 4,
    title: 'aprendiendo Algoritmia con python',
    category: 'Desarrollo y Programacion',
    day: 'jue',
    time: '0267'
  }
  ]

  //const tiltle = <h1>Pa0 <b>APc Co</b></h1>

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Header />
        <Items itemId={1} title = {"Aprendiendo"} category = {"Programacion y Desarrollo"} />
      </div>
    </div>
  )
}

export default App;
