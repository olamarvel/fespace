import Dropdown from './dropdown'
  
export const meun = [
  'Read',

  {
    name: 'Product',
    children: [
      'cart',
      'checkout',
      'support',
    ],
  },
  'FeSpace',
  {
    name: 'Donation',
  },
  {
    name: 'Events',
    children: [
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
      'CATEGORY',
    ],
  },
]
export function Meuns() {
  return meun.map((meun, i) => {
    return  <Dropdown
        name={meun?.name ? meun.name : meun}
        drops={meun?.children ? meun.children : []}
        key={`${meun?.name ? meun.name : meun}${i}`}
        hasChildren={!!meun?.children}
      />
   
})}
