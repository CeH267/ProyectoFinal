import ImgCategory from './../desarrollo-programacion.png';



const Item = ({item}) => {
  return (
    <div className="col-sm-10" key={item.id}>
      <p>{item.day}</p>
      <div className="row item">
            <div className="col-sm-3">
                <img src={ImgCategory} alt="Categoria" className='img-fluid p-0' />
            </div>
            <div className="col-sm-8">
              {item.title} - {item.category}
            </div>
            <div className="col-sm-1">
                Eliminar
            </div>
        </div>
    </div>
  )
}


export default Item
