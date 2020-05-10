import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root : {
    width: '25vw',
    display: 'flex',
    'flex-direction': 'column',
    'background-color': '#999',

    '& *' : {
      width: '25ch',
      margin: '5px',
    },

  },
});

export default function InputField(){
  const classes = useStyles();
    return (
      <form className={classes.root}>
        <h1>Form diay ni Bro</h1>
        <TextField variant="outlined" label="testing"  size="small"/>
        <TextField variant="outlined" label="testing"  size="small"/>
        <TextField variant="outlined" label="testing"  size="small"/>
        <Button size="small" variant="contained" color="primary">Testing</Button>
      </form>




    )
}
