/* eslint-disable react/react-in-jsx-scope */
// components/PrivateRoute.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { verify, logout } from '../Features/authSlice';

const PrivateRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          await dispatch(verify()).unwrap();
        } catch (error) {
          console.log('Failed to verify:', error);
          dispatch(logout());
          router.push('/auth/login');
        }
      };

      checkAuth();
    }, [dispatch, router]);

    if (!user) {
      return null; // Hoặc một loading component
    }

    if (!user.profileSetup && router.pathname !== '../../profile/profile') {
      router.push('../../profile/profile');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default PrivateRoute;
