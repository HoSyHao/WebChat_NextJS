import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { resetPassword, setResetPasswordForm, clearError } from '../../../src/Features/authSlice';
import AuthForm from '../authForm';
import AuthRoute from '@/components/AuthRoute';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { token } = router.query; // Lấy token từ URL

    useEffect(() => {
        // Đặt lại form và xóa lỗi
        dispatch(setResetPasswordForm());
        dispatch(clearError());
    }, [dispatch]);

    const handleSubmit = (values) => {
      // Gửi yêu cầu reset password
      dispatch(resetPassword({ token, password: values.password })).then((action) => {
        if (action.meta.requestStatus === 'fulfilled') {
          router.push('/auth/login');
        }
      }).catch(err => {
        console.log(err);
      });
    };

    return (
        <AuthForm onSubmit={handleSubmit} />
    );
};

export default AuthRoute(ResetPassword);
