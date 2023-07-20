import '../../index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

function App() {
  const [isBurgerMenu, setBurgerMenu] = useState(false);
  const navigate = useNavigate();

  function handleOpenBurgerMenu() {
    setBurgerMenu(true);
  }

  function handleCloseBurgerMenu() {
    setBurgerMenu(false);
  }


  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header
            buttonRegister='Регистрация'
            buttonLogin='Войти'
            buttonStyle='__landing'
            buttonProfile='__button'
            pathToPage='/signup'
            wayToEnter='/signin'
          />
          <Main
          />
          <Footer />
        </>
      } />

      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />

      <Route path='/movies' element={
        <>
          <Header
            buttonRegister='Аккаунт'
            films='Фильмы'
            saveFilm='Сохраненные фильмы'
            buttonStyle='__account'
            buttonProfile='__profile'
            pathToPage='/profile'
            isOpenBurgerMenu={handleOpenBurgerMenu}
            isCloseBurgerMenu={handleCloseBurgerMenu}
            isBurgerMenu={isBurgerMenu}
          />
          <Movies
            isBurgerMenu={isBurgerMenu}
          />
          <Footer />
        </>
      } />
      <Route path='/saved-movies' element={
        <>
          <Header
            buttonRegister='Аккаунт'
            films='Фильмы'
            saveFilm='Сохраненные фильмы'
            buttonStyle='__account'
            buttonProfile='__profile'
            pathToPage='/profile'
            isOpenBurgerMenu={handleOpenBurgerMenu}
            isCloseBurgerMenu={handleCloseBurgerMenu}
            isBurgerMenu={isBurgerMenu}
          />
          <SavedMovies
            isBurgerMenu={isBurgerMenu}
          />
          <Footer />
        </>} />
      <Route path='/profile' element={
        <>
          <Header
            buttonRegister='Аккаунт'
            films='Фильмы'
            saveFilm='Сохраненные фильмы'
            buttonStyle='__account'
            buttonProfile='__profile'
            isOpenBurgerMenu={handleOpenBurgerMenu}
            isCloseBurgerMenu={handleCloseBurgerMenu}
            isBurgerMenu={isBurgerMenu}
          />
          <Profile
            isBurgerMenu={isBurgerMenu}
          />
        </>

      } />
      <Route path='/404' element={
        <Error navigate={navigate} />
      } />
    </Routes>
  );
}

export default App;
