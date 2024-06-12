import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import RootLayout from './components/RootLayout';
import UserProfile from './components/userProfile/UserProfile';
import AdminProfile from './components/adminProfile/AdminProfile'
import StudentProfile from './components/studentProfile/StudentProfile'
import Clubs from './components/clubs/Clubs';

function App() {

  let router=createBrowserRouter([
      {
        path:'',
        element:<RootLayout/>,
        children:[
          {
            path:'',
            element:<Home/>
          },
          {
            path:'home',
            element:<Home/>
          },
          {
            path:'clubs',
            element:<Clubs/>
          },
          {
            path:'register',
            element:<Register/>
          },
          {
            path:'login',
            element:<Login/>
          },
          {
            path:'user-profile',
            element:<UserProfile/>
          },
          {
            path:'admin-profile',
            element:<AdminProfile/>
          },
          {
            path:'student-profile',
            element:<StudentProfile/>
          }
        ]

      }
  ])



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;