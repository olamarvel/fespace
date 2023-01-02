import React from 'react'

const Container = ({ children, className }) => {
 return (
  <section className={`${className ? className : ''} container mx-auto box `}>
   {children}
  </section>
 )
}

export default Container
