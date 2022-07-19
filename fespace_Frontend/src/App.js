import { Routes, Route } from 'react-router-dom'

import { Header, Navbar } from './component'
import { Footer, Home,Read ,Event} from './container'
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
        <Route path="/Events" element={<Event />}  />
      </Routes>
      <Footer />
      {/* <Posts /> */}
      <div className="h-8"></div> 
    </div>
  )
}

export default App
