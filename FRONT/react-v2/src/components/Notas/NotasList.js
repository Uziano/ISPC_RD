import NotasCard from '../Notas/NotasCard'
// import {notas as data} from '../../data/'

//Este es el que renderiza todas las notas con el .map()
export default function NotasList() {
  return (
    <div>
      {/* <NotasCard title={data.title} description={data.description} /> */}
      <NotasCard title={'Pasear al gatico'} description={'Tengo que pasear al gato que se portó re bien el condenado'} />
      <NotasCard title={'Hello, Hello'} description={'Hello brian'} />
      <NotasCard title={'Hello, Hello'} description={'Hello brian'} />
      <NotasCard title={'Hello, Hello'} description={'Hello brian'} />
    </div>
  )
}
