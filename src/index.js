import React from 'react'
import ReactDOM from 'react-dom'
import Product from './components/Product'


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

const App = ({ dummy }) => {
  return (
   <div >
     <h1> Products </h1>
     <ul>
       {dummy.map((prod) =>
                  <Product key={prod.id} name={ prod.product } rating={ prod.rating } price={ prod.price }/>
                 )}
     </ul>
  </div>
  )
}

ReactDOM.render(<App dummy = {dummy_data}/>, document.getElementById('root'))
