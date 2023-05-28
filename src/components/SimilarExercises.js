import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from './Loader';
import HorizontalScrollBar from './HorizontalScrollBar';


const SimilarExercises = ({targetMuscleExercise, equipmentExercise}) => {
  return (
    <Box mb={5} sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mt={5} mb={5}>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercise.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercise} /> : <Loader/> }
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mt={5} mb={5}>
      Exercise That Use <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>The Same Equipment</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercise.length !== 0 ? <HorizontalScrollBar data={equipmentExercise} /> : <Loader/> }
    </Stack>
    </Box>
  )
}

export default SimilarExercises