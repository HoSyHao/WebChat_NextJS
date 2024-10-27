/* eslint-disable react/react-in-jsx-scope */
// components/AuthRoute.jsx
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AuthRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
      if (user) {
        router.push('../../chat/home');
      }
    }, [user, router]);

    if (user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default AuthRoute;
