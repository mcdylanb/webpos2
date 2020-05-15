import React from 'react'
import ReactDOM from 'react-dom'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  example: {
    'background-color': 'red'
  },
  grid: {
    'grid-template-columns': '100px 50px 100px',
    'grid-template-rows': '80px auto 80px',
    'column-gap': '10px',
    'row-gap' : '15px'
  },
})

const Product = (props) => {
  const classes = useStyles()
  return (
    <div >
      <div className={classes.example}> IMG GOES HERE </div>
      <h1>product name</h1>
      <h3>Rating</h3>
      <h3>Tages</h3>
      <h2>PRICE</h2>
    </div>

  )
}
const App = () => {
  const classes = useStyles()
  return (
   <div className={classes.grid}>
     <Product/>

  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
