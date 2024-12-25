import ScrollToTop from '@components/shared/ScrollToTop'
import Home from '@pages/Home'
import Test from '@pages/Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardPage from './pages/Card'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
