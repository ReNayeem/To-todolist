import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AddToList from './Pages/AddToList/AddToList';
import MyList from './Pages/MyList/MyList';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addToList' element={
          <RequireAuth>
            <AddToList></AddToList>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/myList" element={
          <RequireAuth>
            <MyList></MyList>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
