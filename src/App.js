import { Navigate, Route, Routes } from 'react-router';
import Login from './components/Login';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { useSocketCntext } from './context';
import PrivateRoute from './PrivateRoute';

function App() {
  const { user } = useSocketCntext();

  return (
    <div className='app'>
      {user && <Sidebar />}

      <Routes>
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <Rightbar />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
