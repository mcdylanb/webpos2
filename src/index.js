import React from 'react'
import ReactDOM from 'react-dom'
import SimpleTable from './TableContainer'
import InputField from './InputField'

const App = () => (
  <div>
    <InputField/>
    <SimpleTable/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
