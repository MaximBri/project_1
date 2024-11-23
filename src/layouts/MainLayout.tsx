import React from 'react'
import Cookies from 'js-cookie'
import { Outlet, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Header } from '../components'
import setUserDataByToken from '../components/hooks/setUserDataByToken'

const MainLayout: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = Cookies.get('token')
  const cat = Cookies.get('cat')
  React.useEffect(() => {
    if(JSON.stringify(cat)){
      console.log(cat)
      // dispatch(setName(cat))
    }
  },[cat, dispatch])
  React.useEffect(() => {
    setUserDataByToken(token, dispatch, navigate)
  }, [token, dispatch])
  return (
    <>
      <Header />
      <div className='container'>
        <main className='wrapper'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default MainLayout
