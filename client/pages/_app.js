/* eslint-disable react/prop-types */
// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/Store';
import '../src/assets/App.css';
import { SocketProvider } from '../src/context/SocketContext';
import { Toaster } from '../src/Components/ui/sonner';
import axios from 'axios';

axios.defaults.withCredentials = true; // Bật gửi cookies trong Axios

function MyApp({ Component, pageProps }) {
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

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { Provider } from "react-redux";
// import store from "./Store/index.js";
// import axios from "axios";
// import { Toaster } from "./Components/ui/sonner.jsx";
// import { SocketProvider } from "./context/SocketContext.jsx"; // Cập nhật đường dẫn nhập khẩu

// axios.defaults.withCredentials = true; // Bật gửi cookies trong Axios

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <SocketProvider>
//       <App />
//       <Toaster closeButton />
//     </SocketProvider>
//   </Provider>
// );