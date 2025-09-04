import './App.css'
import Signup from './components/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { action as logoutAction } from './utils/authentication'
import RootLayout from './components/pages/RootLayout'
import ErrorPage from './components/pages/errors/ErrorPage'
import OnboardingLayout from './components/pages/onboarding/OnboardingLayout'
import OnboardingStep1 from './components/pages/onboarding/OnboardingStep1'
import OnboardingStep2 from './components/pages/onboarding/OnboardingStep2'
import OnboardingStep3 from './components/pages/onboarding/OnboardingStep3'
import OnboardingStep4 from './components/pages/onboarding/OnboardingStep4'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import DashboardLayout from './components/pages/dashboard/DashboardLayout'


const study_pal_router = createBrowserRouter(
  [
    {path: "/", 
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: "home", element: <Home/>},
        {path: "signup", element: <Signup/>},
        {path: "logout", action:logoutAction},
        {path: "login", element:<Login/>},
        {path: "onboarding", 
          element:<OnboardingLayout/>,
          children:[
            {path: "step1", element:<OnboardingStep1/>},
            {path: "step2", element:<OnboardingStep2/>},
            {path: "step3", element:<OnboardingStep3/>},
            {path: "step4", element:<OnboardingStep4/>},
          ]
        },
        {path: "dashboard", 
          element:<DashboardLayout/>,
          children:[
            {path: "home", element:<div></div>},
            {path: "subjects", element:<div></div>},
            {path: "courses", element:<div></div>},
            {path: "documents", element:<div></div>},
          ]
        },
        
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
