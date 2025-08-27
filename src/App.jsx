import './App.css'
import Signup from './components/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const study_pal_router = createBrowserRouter(
  [
    {path: "/", element: <></>},
    {path: "/signup", element: <Signup/>},

  ]
)

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={study_pal_router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
