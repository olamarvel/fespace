import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as ICONS from '../icons'
import { useContext } from 'react';
import { FunctionalContext } from '../contexts';

export function SocialIcons({block = false}) {
  const absolute = block?'':'absolute'
  const close = useContext(FunctionalContext)
  return <div className={`grow bottom-5 ${absolute}`}>
    <FontAwesomeIcon
      icon={ICONS.faFacebook}
      className={'mx-2 hover:text-secondary'} onClick={close} />
    <FontAwesomeIcon
      icon={ICONS.faInstagram}
      className={'mx-2 hover:text-secondary'} onClick={close} />
    <FontAwesomeIcon
      icon={ICONS.faYoutube}
      className={'mx-2 hover:text-secondary'} onClick={close} />
    <FontAwesomeIcon
      icon={ICONS.faTwitter}
      className={'mx-2 hover:text-secondary'} onClick={close} />
  </div>;
}
