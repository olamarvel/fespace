import { Link } from 'react-router-dom'

const Logo = ({ path = '/',styles='' }) => {
  return (
    <div className={"grow font-Pacifioco "+styles}>
      <Link to={path}>
        <span className="border-r-2 pr-5 h-fit cursor-pointer hover:shadow-sm hover:text-dark">
          FeSpace
        </span>
      </Link>
    </div>
  )
}

export default Logo
