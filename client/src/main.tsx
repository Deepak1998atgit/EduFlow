import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/routes'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import CONFIG_KEYS from "./config";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import ErrorBoundary from './errorboundry/errorBoundry';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CONFIG_KEYS.GOOGLE_AUTH_CLIENT_ID}>
      <Provider store={store}>
          <RouterProvider router={router} />
          <ToastContainer />
      </Provider>
      </GoogleOAuthProvider>
  </React.StrictMode>,
)
