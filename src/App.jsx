import './App.css'
import Signup from './components/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const study_pal_router = createBrowserRouter(
  [
    {path: "/", element: <></>},
    {path: "/signup", element: <Signup/>},

  ]
)


function App() {

  return (
    <RouterProvider router={study_pal_router}></RouterProvider>
  )
}

export default App
