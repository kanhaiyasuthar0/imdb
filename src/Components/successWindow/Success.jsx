import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext';

const Success = () => {
  const {isSuccess, setIsSuccess, navigateHome} = useContext(AuthContext);
  
    
    useEffect(()=>{

        setTimeout(() => {
            
            setIsSuccess(true);
            // navigateHome()
            window.close()

        }, 1000);

    },[] )
  return (
    <h1 style={{height:"100vh"}} >Thank you for Signing in</h1>
  )
}

export default Success