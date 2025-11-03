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
import DashboardHome from './components/pages/dashboard/DashboardHome'
import Subjects from './components/pages/dashboard/Subjects'
import Courses from './components/pages/dashboard/Courses'
import Documents from './components/pages/dashboard/Documents'
import CourseDetails from './components/pages/dashboard/CourseDetails'
import CreateSubject from './components/pages/dashboard/CreateSubject'
import SubjectDetails from './components/pages/dashboard/SubjectDetails'
import SubjectUpdate from './components/pages/dashboard/SubjectUpdate'
import CreateCourse from './components/pages/dashboard/CreateCourse'
import CourseUpdate from './components/pages/dashboard/CourseUpdate'
import CreateSection from './components/pages/dashboard/CreateSection'
import SectionUpdate from './components/pages/dashboard/SectionUpdate'
import Quizzes from './components/pages/dashboard/quizzes'
import Settings from './components/pages/dashboard/Settings'
import UserProfile from './components/pages/dashboard/UserProfile'


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
            {index:true, element:<DashboardHome/>},
            {path: "subjects", element:<Subjects/>},
            {path: "subjects/create", element:<CreateSubject/>},
            {path: "subjects/:subjectId", element:<SubjectDetails/>},
            {path: "subjects/:subjectId/update", element:<SubjectUpdate/>},
            {path: "courses", element:<Courses/>},
            {path: "courses/create", element:<CreateCourse/>},
            {path: "courses/:courseId/update", element:<CourseUpdate/>},
            {path: "courses/:courseId/:sectionId", element:<CourseDetails/>},
            {path: "courses/:courseId/create_section", element:<CreateSection/>},
            {path: "courses/:courseId/:sectionId/update", element:<SectionUpdate/>},
            {path: "documents", element:<Documents/>},
            {path: "quizzes", element:<Quizzes/>},
            {path: "settings", element:<Settings/>},
            {path: "userProfile", element:<UserProfile/>},
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
