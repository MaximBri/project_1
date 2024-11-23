import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookie from 'js-cookie'

import { setAuth, setExpires } from '../../RTK/slices/AuthSlice'
import { setAuthWindow } from '../../RTK/slices/WindowsSlice'

interface AuthLogicReturnType {
  entance: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}
interface AuthLogicEntanceType {
  login: string
  pass: string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setAuthMess: React.Dispatch<React.SetStateAction<string>>
  setStateAuthErr: React.Dispatch<React.SetStateAction<string>>
}

export const messages: string[] = [
  'Авторизация прошла успешно',
  'Отправка данных...',
  'Неверный логин или пароль',
  'Пользователь с таким логином уже существует',
  'Произошла ошибка. Повторите попытку позже :(',
  'Пароль должен быть длиннее 4 символов',
  'Пароли не совпадают!',
  'Введите имя',
  'Заполните все поля!'
]

const useAuthLogic = ({
  login,
  pass,
  setLoading,
  setAuthMess,
  setStateAuthErr,
}: AuthLogicEntanceType): AuthLogicReturnType => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const time: Date = useSelector<any, Date>(state => state.auth.expiresIn)
  const entance = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const body = {
      login,
      password: pass,
    }
    if(pass && login){
      try {
        setLoading(true)
        setStateAuthErr('')
        const response = await axios.post(
          'https://catsandpies.ru/api/Auth/Login',
          body,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        console.log(response)
        setAuthMess(messages[0])
        dispatch(setAuth(true))
        // const time: Date = new Date(response.data.data.token.expiresIn)
        dispatch(setExpires(time))
        dispatch(setAuthWindow(false))
        Cookie.set('token', response.data.data.token.token)
        navigate('/')
      } catch (error: any) {
        console.log(error)
        if (error.response.status === 404) setStateAuthErr(messages[4])
        else setStateAuthErr(messages[2])
      }
    }
    else{
      setStateAuthErr(messages[8])
    }
    setLoading(false)
  }
  return { entance }
}

export default useAuthLogic
