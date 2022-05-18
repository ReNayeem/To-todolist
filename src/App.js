import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Toaster } from 'react-hot-toast';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AddToList from './Pages/AddToList/AddToList';
import MyList from './Pages/MyList/MyList';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addToList' element={<AddToList></AddToList>}></Route>
        <Route path='/myList' element={<MyList></MyList>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/manage" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster /> */}
    </div>
  );
}

export default App;
