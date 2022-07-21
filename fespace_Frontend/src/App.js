import { Routes, Route } from 'react-router-dom'

import { Navbar } from './component'
import { Footer,Blog,Fespace } from './container'
import './App.css'
// import Post from './component/post'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*"  element={<Blog></Blog>} />
        <Route path="/FeSpace" element={<Fespace></Fespace>} />
      </Routes>
      
      
      <Footer />
      {/* <Posts /> */}
      {/* <div className="h-8"></div>  */}
    </div>
  )
}

export default App
