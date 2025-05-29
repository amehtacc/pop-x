import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AccountSettings from './pages/AccountSettings.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<WelcomePage/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/account-settings' element={<AccountSettings/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)