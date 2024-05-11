import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'skills', 'work'].map((item, index) =>  (    
                            <a href={`#${item}`} 
                            key={item + index}
                            className="app__navigation-dot"
                            style={active === item ? { backgroundColor: '#fff' } : { backgroundColor: '#848484', opacity: 0.5}}
                            />
                    ))}
    </div>
  )
}

export default NavigationDots