import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import PersonajesGrid from './components/PersonajesGrid'

const App = () => {
  
  const[items, setItems]= useState([])
  const[isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
    const fetchItems = async () => {
      const resultado = await axios.get('/personajes.json')
      console.log(resultado)
      setItems(resultado.data)
      setIsLoading(false)
    }

    fetchItems()
  },[])

  return (
    <div className="container">
      <Header />
      <PersonajesGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App

