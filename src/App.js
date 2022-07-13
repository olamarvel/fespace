import { Routes, Route } from 'react-router-dom'

import { Header, Navbar } from './component'
import { Footer, Home,Read } from './container'
import './App.css'
// import Post from './component/post'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Read/:category" element={<Read />} />
      </Routes>
      <Footer />
      {/* <Posts /> */}
    </div>
  )
}

export default App
