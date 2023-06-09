import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('')

    function handleChange(event) {
        const value = event.target.value
        if (value !== '') {
            setCity(value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        onChangeCity(city)

    }


  return (
    <>
   
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder='Search Country' />
        </form>
      
     
    </>
  )
}