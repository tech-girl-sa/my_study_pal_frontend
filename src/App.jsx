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


const study_pal_router = createBrowserRouter(
  [
    {path: "/", 
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: "signup", element: <Signup/>},
        {path: "logout", action:logoutAction},
        {path: "login", element:<p>login page</p>},
        {path: "onboarding", 
          element:<OnboardingLayout/>,
          children:[
            {path: "step1", element:<OnboardingStep1/>},
            {path: "step2", element:<OnboardingStep2/>},
            {path: "step3", element:<OnboardingStep3/>},
            {path: "step4", element:<OnboardingStep4/>},
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
