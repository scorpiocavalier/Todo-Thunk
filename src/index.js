import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

import App from './App'
import store from './redux/store'

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate
      loading={ <div>Loading...</div> }
      persistor={ persistor }
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

