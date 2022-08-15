import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ICONS from '../icons'
import { useContext } from 'react'
import { FunctionalContext, USERCONTEXT } from '../contexts'

export function SocialIcons({ block = false }) {
  const user = useContext(USERCONTEXT) 
  const absolute = block ? '' : 'absolute flex items-center'
  const close = useContext(FunctionalContext)
  return (
    <div className={`grow bottom-5 ${absolute}` }>
      {!!user && !block && (
          <img
            src={user.picture}
            alt={user.name}
            className="w-5 h-5 rounded-full inline-block mx-2 "
          />
      )}
      <FontAwesomeIcon
        icon={ICONS.faFacebook}
        className={'mx-2 hover:text-secondary'}
        onClick={close}
      />
      <FontAwesomeIcon
        icon={ICONS.faInstagram}
        className={'mx-2 hover:text-secondary'}
        onClick={close}
      />
      <FontAwesomeIcon
        icon={ICONS.faYoutube}
        className={'mx-2 hover:text-secondary'}
        onClick={close}
      />
      <FontAwesomeIcon
        icon={ICONS.faTwitter}
        className={'mx-2 hover:text-secondary'}
        onClick={close}
      />
    </div>
  )
}
