/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoginForm, signin, clearError, setUserInfo } from '@/Features/authSlice';
import AuthForm from './authForm';
import { useRouter } from 'next/router';
import AuthRoute from '@/components/AuthRoute';



const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(setLoginForm());
        dispatch(clearError());
    }, [dispatch]);

    const handleSubmit = (values) => {
      dispatch(signin(values))
          .unwrap()
          .then((data) => {
            dispatch(setUserInfo(data.users))
            if (data.users.id) {
              if(data.users.profileSetup) {router.push("/chat/home")}
                else router.push("/profile/profile")
            }
          })
          .catch((error) =>{
              console.error("Failed to sign in:",error);
          });
    };
   

  return (
    <AuthForm onSubmit={handleSubmit}/>
  )
}

export default AuthRoute(Login);