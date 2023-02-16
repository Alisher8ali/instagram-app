import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthPath, Layout } from '../services/path';

const useLocations = () => {
    const navigate=useNavigate();

  //Auth forwards

    const goToLogin=React.useCallback(()=>navigate(AuthPath.login),[navigate])

  //Layout forwords

  const goToHome=React.useCallback(()=>navigate(Layout.home),[navigate])


  return {
    goToLogin,
    goToHome
  }
}

export default useLocations
