// import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Client } from '../client'
import { Masonary } from '../fespace'
import useSplash from '../utils/useSplash'
import jwt_decode from 'jwt-decode'

// import GoogleLogin from 'react-google-login';
// 46311462
import { useCallback, useEffect, useRef } from 'react'

const Login = ({setUser}) => {
  const images = useSplash()
  const navigate = useNavigate()
  const button = useRef(false)
  const [params] = useSearchParams()
  const redirect = params.get('redirect')
  const responseGoogle = useCallback(
    (response) => {
      const decoded = jwt_decode(response.credential)
      localStorage.setItem('user', JSON.stringify(decoded))
      const { name, picture, sub } = decoded
      const doc = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture,
      }
      Client.createIfNotExists(doc)
        .then(() => {
          navigate(`/${redirect || ''}`, { replace: true })
          setUser(decoded)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    [navigate, redirect,setUser]
  )

  useEffect(() => {
    /*global google */
    if (!button) return
    google.accounts.id.initialize({
      client_id: `${process.env.REACT_APP_GOOGLE_API_TOKEN}`,
      callback: responseGoogle,
    })
    google.accounts.id.renderButton(
      button.current,
      { theme: 'outline', size: 'large' } // customization attributes
    )
    google.accounts.id.prompt() // also display the One Tap dialog
  }, [responseGoogle, button])

  return (
    <div className="relative w-full h-screen">
      <Masonary images={images} />
      <div className="bg-dark/30 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="shadow-2xl" ref={button}>
          {/* <GoogleLogin
            clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
            render={(renderProps) => ( */}
          {/* <button className="btn text-2xl px-8 rounded" >
            sign in
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </button> */}
          {/* )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />  */}
        </div>
      </div>
    </div>
  )
}

export default Login
