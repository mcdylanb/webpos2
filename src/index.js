import React from 'react'
import ReactDOM from 'react-dom'

const dummy_data = [
  {
    id: 1,
    product: 'Huwawei Matebook 13',
    rating: 4,
    price: 959.00
  },
  {
    id: 2,
    product: 'LG gram ',
    rating: 4.3,
    price: 1749.97
  },
  {
    id: 3,
    product: 'Lenovo Thinkpad P1',
    rating: 4,
    price: 1483.74
  },

]

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
