import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'

import { RouterProvider } from 'react-router-dom'
import { router } from 'router'

import { queryClient } from 'services/api'
import { QueryClientProvider } from 'react-query'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'services/store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
          </ChakraProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
