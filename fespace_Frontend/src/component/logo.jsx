import { Link } from 'react-router-dom'
// import logo from '../logo.png'

const Logo = ({ path = '/',styles='' }) => {
  return (
    <div className={"grow font-Pacifioco "+styles}>
      <Link to={path}>
        {/* <img src={logo} alt="Fespace Logo" className='w-16' /> */}
        <span className=" pr-5 h-fit cursor-pointer hover:shadow-sm hover:text-dark text-[0.75rem] lg:text-base">
          Quaver'sHelps
        </span>
      </Link>
    </div>
  )
}
  
export default Logo
