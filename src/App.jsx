import Loading from "./Loading";
import Tours from "./Tours";
import { useEffect, useState } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
    console.log('removed' + id);
  } 

  const fetchDataFromApi = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDataFromApi();
  }, [])

  if(isLoading) {
    return (
      <main>
        <Loading />
      </main>
      
    );
  }

    if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <br />
          <button className='btn' onClick={() => fetchDataFromApi()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
      <main>
        <h1>Our Tours</h1>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  };


  
export default App;
