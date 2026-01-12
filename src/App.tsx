import './App.css'

import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'
import { useState, useEffect } from 'react';

// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"

  // PENDIENTE: Variable de estado y la función de modificación. 

  const [dishes, setDishes] = useState<Dish[]>([]);


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(url);
        const data: Dish[] = await response.json();
        setDishes(data);
      } catch (error) {
        console.error('Error al cargar los platos:', error);
      }
    };

    fetchDishes();
  }, []);




  return (
    <Grid container spacing={5}>

      {/* Student */}
      <Grid size={{ xs: 12 }}>

        <Student
          apellidos="Montes Muñoz"
          nombres="Cecilia Inés "
          paralelo={1}
        />


      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>

        <DishTable data={dishes} />

      </Grid>


    </Grid>
  )
}

export default App
