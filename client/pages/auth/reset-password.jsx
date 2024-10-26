import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword, setResetPasswordForm, clearError } from '../../Features/authSlice';
import AuthForm from './authForm';
import { useRouter } from 'next/router';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { token } = router.query;
    
    useEffect(() => {
        dispatch(setResetPasswordForm());
        dispatch(clearError());
    }, [dispatch]);
    
    const handleSubmit = (values) => {
      dispatch(resetPassword({ token, password: values.password })).then((action) => {
        if (action.meta.requestStatus === 'fulfilled') {
          router.push('/login');
        }
        console.log(action);
      }).catch(err => {
        console.log(err);
      });
    };

  return (
    <AuthForm onSubmit={handleSubmit}/>
  );
};

export default ResetPassword;