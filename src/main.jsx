import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './routes/homePage/HomePage';
import Dasboard from './routes/dashboardPage/Dasboard';
import ChatPage from './routes/chatPage/ChatPage';
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import SignInPage from './routes/sigInPage/SignInPage';
import SignUpPage from './routes/signUpPage/signUpPage';

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
      children:[
        {path:"/", element:<HomePage/>},
        {path:"/sign-in/*", element:<SignInPage/>},
        {path:"/sign-up/*", element:<SignUpPage/>},
        {element:<DashboardLayout/>,
          children:[
            {path:"/dashboard", element:<Dasboard/>},
            {path:"/dashboard/chats/:id", element:<ChatPage/>},
          ]
        },
       
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
