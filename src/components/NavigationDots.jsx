import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'skills', 'work'].map((item, index) =>  (    
                            <a href={`#${item}`} 
                            key={item + index}
                            className="app__navigation-dot"
                            style={active === item ? { backgroundColor: '#fff', color: 'transparent' } : { backgroundColor: '#848484', color: 'transparent', opacity: 0.5}}
                            >•</a>
                    ))}
    </div>
  )
}

export default NavigationDots