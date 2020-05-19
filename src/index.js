import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

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

ReactDOM.render(<App dummy = {dummy_data}/>, document.getElementById('root'))
