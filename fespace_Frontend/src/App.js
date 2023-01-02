import { Routes, Route } from 'react-router-dom'
import { USER } from './contexts'
import { Login, Products } from './container'
import { Post } from './component'
import { Blog, Fespace } from './container'
import './App.css'
import { useEffect, useState } from 'react'
import Root from './layouts/root'
// import Post from './component/post'
function App() {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    // debugger
    setUser(
      localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))
    )
  }, [])
  return (
    <USER value={user}>
      <div className="App">
        <Routes>
          <Route path="*" element={<Webroot />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/product/*" element={<Products />} />
        </Routes>
      </div>
    </USER>
  )
}

function Webroot() {
  return (
    <>
    <Root>

      <Routes>
        <Route path="*" element={<Blog />} />
        <Route path="/FeSpace" element={<Fespace />} />
        <Route path="post/:slug" element={<Post  />} />
      </Routes>
    </Root>
    </>
  )
}
export default App
