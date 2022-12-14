import NotasCard from '../Notas/NotasCard'
// import {notas as data} from '../../data/'

//TRAER DEL BACK LA INFO PARA USAR LAS NOTASCARDS
//Este es el que renderiza todas las notas con el .map()
//Dar estilos y formatos
export default function NotasList() {

  

  return (
    <div>
      <NotasCard title={'Pasear al gatico'} description={'Tengo que pasear al gato que se portó re bien el condenado'} />
    </div>
  )
}
