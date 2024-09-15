
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CardCoffee from './components/CardCoffee';

function App() {

  const coffees = useLoaderData();

  return (
    <div className='p-20'>
      <h1 className='text-6xl text-center text-orange-300 pb-14'>Hot Cold coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CardCoffee
          key={coffee._id}
          coffee={coffee}
          ></CardCoffee>)
        }
      </div>

    </div>
  )
}

export default App
