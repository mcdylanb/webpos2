import React from 'react'
import ReactDOM from 'react-dom'

const Product = (props) => {
  return (
    <div >
      <div > IMG GOES HERE </div>
      <h1>product name</h1>
      <h3>Rating</h3>
      <h3>Tages</h3>
      <h2>PRICE</h2>
    </div>

  )
}
const App = () => {
  return (
   <div >
     <Product/>

  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
