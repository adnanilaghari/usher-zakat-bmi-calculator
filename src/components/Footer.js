import React from 'react'
    
    const Footer = () => {
      return (
        <div className='fixed bottom-0 left-0 bg-blue-600 w-screen text-center '>
          <div className="text text-white">
            &copy; Copyright {new Date().getFullYear()} | Developed by P2P CLOUDS
          </div>
        </div>
      )
    }
    
    export default Footer
    
    