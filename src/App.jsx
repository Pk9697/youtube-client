import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from '@/constants/routes'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<div>Home</div>} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
