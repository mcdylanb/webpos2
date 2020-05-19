import React from 'react'
import Product from './components/Product'

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

export default App
