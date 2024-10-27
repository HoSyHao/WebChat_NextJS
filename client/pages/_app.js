/* eslint-disable react/prop-types */
// pages/_app.js
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../src/Store';
import '../public/assets/App.css';
import { SocketProvider } from '../src/context/SocketContext';
import { Toaster } from '../src/components/ui/sonner';
import axios from 'axios';

axios.defaults.withCredentials = true; // Bật gửi cookies trong Axios

function MyApp({ Component, pageProps }) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Tránh render khi chưa mount xong

  return (
    <Provider store={store}>
      <SocketProvider>
        <Component {...pageProps} />
        <Toaster closeButton />
      </SocketProvider>
    </Provider>
  );
}

export default MyApp;
