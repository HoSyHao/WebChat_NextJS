import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRegisterForm , clearError, signup} from '../../Features/authSlice';
import AuthForm from './authForm';
import { useRouter } from 'next/router';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    useEffect(() => {
        dispatch(setRegisterForm());
        dispatch(clearError());
    }, [dispatch]);

    const handleSubmit = (values) => {
      dispatch(signup(values))
      .then((action) =>{
        if( action.meta.requestStatus === 'fulfilled' && action.payload.status) {
          router.push('/profile');
        }
      }).catch(err => {
        console.log("Failed to sign in:",err);
      })
    }

  return (
    <AuthForm onSubmit={handleSubmit}/>
  )
}

export default Register