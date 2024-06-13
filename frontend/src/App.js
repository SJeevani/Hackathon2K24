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
import BookHall from './components/bookhall/BookHall';
import Halls from './components/halls/Halls';
import Hall from './components/hall/Hall';
import Bookings from './components/bookings/Bookings';

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
            element:<UserProfile/>,
          },
          {
            path:'user-profile/hall-booking',
            element:<BookHall/>,
          },
          {
            path:'user-profile/halls',
            element:<Halls/>
          },
          {
            path:'user-profile/hall/:hallId',
            element:<Hall/>
          },
          {
            path:'user-profile/bookings',
            element:<Bookings/>
          },
          {
            path:'admin-profile',
            element:<AdminProfile/>
          },
          {
            path:'admin-profile/halls',
            element:<Halls/>
          },
          {
            path:'admin-profile/hall/:hallId',
            element:<Hall/>
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