import axios from 'axios';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { setAuth } from '@/app/store/slices/AuthSlice';
import { setRegisterWindow } from '@/app/store/slices/WindowsSlice';
import { setMessage } from '@/features/notifications/model/messagesLogic';
import { API_URL, TOKEN } from '@/shared/globals/globalsData';
import { apiRoutes } from '@/shared/globals/apiRoutes';
import { routes } from '@/app/routes/model/routes';
import { messages } from '../authorization/model/messagesForUser';

interface RegisterLogicReturnType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  repeatPass: string;
  setRepeatPass: React.Dispatch<React.SetStateAction<string>>;
  register: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}
interface RegisterLogicEntanceType {
  login: string;
  pass: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthMess: React.Dispatch<React.SetStateAction<string>>;
  setStateAuthErr: React.Dispatch<React.SetStateAction<string>>;
}

const useRegisterLogic = ({
  login,
  pass,
  setLoading,
  setAuthMess,
  setStateAuthErr,
}: RegisterLogicEntanceType): RegisterLogicReturnType => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [repeatPass, setRepeatPass] = useState<string>('');
  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pass.length < 4) {
      setStateAuthErr(messages[5]);
    } else if (!name) {
      setStateAuthErr(messages[7]);
    } else if (pass !== repeatPass) {
      setStateAuthErr(messages[6]);
    } else {
      const body = {
        name,
        login,
        password: pass,
      };
      try {
        setStateAuthErr('');
        setLoading(true);
        const response = await axios.post(
          API_URL + apiRoutes.registration,
          body,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        dispatch(setAuth(true));
        Cookie.set(TOKEN, response.data.data.token.token);
        setAuthMess(messages[0]);
        dispatch(setRegisterWindow(false));
        setMessage({
          message: response.data.messageForUser,
          statusCode: response.data.statusCode,
          dispatch,
        });
        navigate(routes.main.home.path);
      } catch (error: any) {
        console.log(error);
        if (error.response.status === 409) setStateAuthErr(messages[3]);
        else setStateAuthErr(messages[4]);
      }
      setLoading(false);
    }
  };
  return {
    register,
    name,
    setName,
    repeatPass,
    setRepeatPass,
  };
};

export default useRegisterLogic;
