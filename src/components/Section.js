import React from 'react'

const Section = ({title='Work Experience', children}) => {
  return (<section className="mb-6 text-left">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          {title}
        </h2>
        <> {children}
        </>
       
    
      </section>)
}

export default Section