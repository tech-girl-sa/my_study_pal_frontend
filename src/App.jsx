import './App.css'
import Signup from './components/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { action as logoutAction } from './utils/authentication'
import Error404 from './components/pages/errors/Error404'
import Error500 from './components/pages/errors/Error500'
import RootLayout from './components/pages/RootLayout'
import ErrorPage from './components/pages/errors/ErrorPage'


const study_pal_router = createBrowserRouter(
  [
    {path: "/", 
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: "signup", element: <Signup/>},
        {path: "logout", action:logoutAction},
        {path: "login", element:<p>login page</p>},
        
      ]},
    
     
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
