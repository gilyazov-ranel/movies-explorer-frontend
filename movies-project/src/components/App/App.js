import '../../index.css';
import { Routes, Route } from 'react-router-dom';
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
          <Main />
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
          />
          <Movies />
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
          />
          <SavedMovies />
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
          />
          <Profile />
        </>

      } />
    <Route path='/404' element={
      <Error />
    } />
    </Routes>
  );
}

export default App;
