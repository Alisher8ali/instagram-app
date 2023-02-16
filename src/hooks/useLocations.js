import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthPath } from '../services/path';

const useLocations = () => {
    const navigate=useNavigate();

    const goToLogin=React.useCallback(()=>navigate(AuthPath.login),[navigate])
  return {
    goToLogin
  }
}

export default useLocations
