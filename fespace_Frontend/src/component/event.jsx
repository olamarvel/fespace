import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom'
import { ICONS, DropdownUi as Dropdown } from '.'
import { urlFor } from '../client'

const Completionist = () => <span>It's Today</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div className="text-lg opacity-30 text-center w-full center mt-7">
      {completed ? (
        <Completionist />
      ) : (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      )}
    </div>
  )
}

const Event = ({
  event: { Flyer, from, description, guests, slug, ticket, title, to },
}) => {
  const src = Flyer && urlFor(Flyer).height(310).url()

  return (
    <div className="w-full grid md:grid-cols-2 gap-4 rounded shadow-card h-fit items-center my-8 grid-cols-1">
      <div
        className={`w-full h-72 rounded center relative bg-no-repeat bg-center bg-cover md:h-full `}
        style={{
          backgroundImage: `url(${''+ src + ''})`,
        }}
      >
        {/* <img src={src} alt={title} className="rounded-r object- absolute top-0 left-0 right-0 bottom-0" /> */}
      </div>
      <div className="py-4 px-6 border-l-2 border-l-primary">
        <Countdown date={from} renderer={renderer} className="text-lg" />
        <h2 className="mt-2 text-xl">{title}</h2>
        <Dropdown color="primary" drops={guests} />

        <div className="my-2">
          <span className="span block">
            From: <span className="mx-2">{from}</span>
          </span>
          <span className="span block">
            to: <span className="mx-2">{to}</span>
          </span>
        </div>
        <p>{description}</p>
        <button className="btn">
          <Link to={ticket}>
          Ticket <FontAwesomeIcon icon={ICONS.faArrowRightLong} />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Event
