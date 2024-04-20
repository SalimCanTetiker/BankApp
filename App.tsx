import React from 'react'
import { Provider } from 'react-redux'

import { Store } from './src/redux/Store'
import AuthStack from './src/navigators/AuthStack'


const App = () => {
  return (
    <Provider store={Store}>
      <AuthStack/>
    </Provider>
  )
}

export default App