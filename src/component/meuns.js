import Dropdown from './dropdown'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { FunctionalContext } from '../contexts'
import { useRequest ,QMeun} from '.' 

export const meun = [
  'Read',

  {
    name: 'Mission',
    children: [
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
    ],
  },
  'FeSpace',
  {
    name: 'Donation',
    children: [
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
    ],
  },
  {
    name: 'Events',
    children: [
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
    ],
  },
]
export function Meuns() {
  // const meun = useRequest(QMeun)
  const close = useContext(FunctionalContext)

  return meun.map((meun, i) => {
    return meun ? (
      <Dropdown
        name={meun?.name ? meun.name : meun}
        drops={meun?.children ? meun.children : []}
        key={`${meun?.name ? meun.name : meun}${i}`}
        hasChildren={!!meun?.children}
      />
    ) : (
      <div
        key={meun + '' + i}
        className="px-1 lg:px-4 uppercase mx-1 lg:mx-3 cursor-pointer hover:text-secondary w-fit my-4"
        onClick={close}
      >
        <NavLink
          // to={meun === 'Home' ? '/' : meun}
          to={meun === 'Read' ? '/' : meun}
          className={({ isActive }) =>
            isActive ? 'text-dark hover:text-secondary' : ''
          }
          end
        >
          {meun}
        </NavLink>
      </div>
    )
  })
}
