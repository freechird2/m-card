import ScrollToTop from '@components/shared/ScrollToTop'
import Home from '@pages/Home'
import Test from '@pages/Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardPage from '@pages/Card'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'
import Navbar from '@components/shared/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={Test} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
