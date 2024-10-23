import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox(){
 
    return(
        <div className='SearchBox'>
        <form >
             <TextField id="city" label="Enter City Name" variant="outlined"  required/>
             <Button variant="contained" type='submit' id="btn"> Search    </Button>
        </form>
        </div>
    )
}