import Tour from "./Tour"

const Tours = ({ tours, removeTour }) => {
  return (
    <>
        <div className="tours">
          {tours.map((tour)=> {
            return <Tour tour={tour} removeTour={removeTour} key={tour.id} />
          })}
        </div>
    </>
  )
}
export default Tours