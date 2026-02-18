import { useState } from "react";

const Tour = ({tour, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div className="tour-price">${tour.price}</div>
      <div><img className="img" src={tour.image} alt="" /></div>

      <div className="tour-info">
        <h5>{tour.name}</h5>
      
        <p>{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button className='info-btn' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : '  read more'}
        </button></p>
        
        <button className="btn delete-btn btn-block" type="button" onClick={()=> {removeTour(tour.id)}}>Not interested</button>
      </div>

      
      
    </article>
  )
}
export default Tour