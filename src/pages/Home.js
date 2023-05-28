import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Excercises from '../components/Excercises'
import SearchExcercise from '../components/SearchExcercise'


const Home = () => {
  const [exercises, setExercises] = useState([]);
const [bodyPart, setBodyPart] = useState('all');
  return (

    <Box>
    <HeroBanner/>
    <SearchExcercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Excercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home