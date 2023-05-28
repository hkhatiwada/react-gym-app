import React from 'react'
import {Link} from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { exerciseOptions } from '../utils/fetchData';

const ExcerciseCard = ({exercise}) => {
  return (
   <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exerciseOptions.name} loading='lazy'/>
    <Stack direction="row" marginTop={"8px"}>
    <Button sx={{ ml: '21px', color: '#fff', background: 'grey', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: 'blue', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
    </Typography>
   </Link>
  )
}

export default ExcerciseCard