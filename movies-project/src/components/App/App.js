import '../../index.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
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
import { moviesApi } from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  let location = useLocation();

  const [localFilterMovies, setLocalFilterMovies] = useLocalStorage([], 'movies');
  const [localSearch, setLocalSearch] = useLocalStorage('', 'search');
  const [localDuration, setLocalDuration] = useLocalStorage(false, 'duration');

  const [isBurgerMenu, setBurgerMenu] = useState(false);
  const [isDuration, setDuration] = useState(localDuration || false);
  const [isDurationSaveMovies, setDurationSaveMovies] = useState(false);
  const [isSaveProfile, setSaveProfile] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState(localFilterMovies || []);
  const [searchingResults, setSearchingResults] = useState(false);
  const [searchingSaveResults, setSearchingSaveResults] = useState(false);

  const [saveMovies, setSaveMovies] = useState([]);
  const [filterSaveMovies, setFilterSaveMovies] = useState([])

  const [loggedIn, setLoggedIn] = useState(false);
  const [validationField, setValidationField] = useState(false);
  const [validationFieldEmail, setValidationFieldEmail] = useState(false);
  const [userId, setUserId] = useState('');

  const [search, setSearch] = useState(localSearch || '');
  const [searchSave, setSearchSave] = useState('');

  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessageForm, serErrorMessageForm] = useState(false);
  const [successfulUpdate, setSuccessfulUpdate] = useState(false);
  const nameUser = useInput('', { isEmpty: true, minLength: 2 });
  const emailUser = useInput('', { isEmpty: true, minLength: 0, isEmail: false });
  const nameUserProfile = useInput('', { isEmpty: true, minLength: 2 });
  const emailUserProfile = useInput('', { isEmpty: true, minLength: 0, isEmail: false });
  const passwordUser = useInput('', { isEmpty: true, minLength: 8 });
  const [preloader, setPreloader] = useState(false);
  const [resultRequestServer, setResultRequestServer] = useState('');
  const token = localStorage.getItem('token');
  const mainApi = new MainApi('https://api.project.movies.nomoreparties.sbs', token)

  const [name, setName] = useState('');
  const [nameGreeting, setNameGreeting] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (token) {
  //     mainApi.getMovies().then(items => {
  //       setSaveMovies(items.movies);
  //       setFilterSaveMovies(items.movies);
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loggedIn, token])

  useEffect(() => {
    setLocalFilterMovies(filterMovies);
    setLocalSearch(search);
    setLocalDuration(isDuration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterMovies, search, isDuration]);

  useEffect(() => {
    if (token) {
      mainApi.getUsers().then(items => {
        setCurrentUser(items);
        setName(items.user?.name);
        setNameGreeting(items.user?.name);
        setEmail(items.user?.email);
        handleLoginIn();
        handleTransitionMovies();
        setUserId(items.user._id);
      }).catch((err) => {
        console.log(err);
      });
      moviesApi.getMovies().then(movie => {
        setMovies(movie);
        setPreloader(false);
      }).catch((err) => {
        setResultRequestServer('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        console.log(err);
      })
      mainApi.getMovies().then(items => {
        setSaveMovies(items.movies);
        setFilterSaveMovies(items.movies);
      }).catch((err) => {
        console.log(err);
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if ((nameUser.isDirty && nameUser.isEmpty) ||
      (nameUser.isDirty && nameUser.minLengthError) ||
      (nameUserProfile.isDirty && nameUserProfile.isEmpty) ||
      (nameUserProfile.isDirty && nameUserProfile.minLengthError) ||
      (passwordUser.isDirty && passwordUser.isEmpty) ||
      (passwordUser.isDirty && passwordUser.minLengthError)) {
      setValidationField(true);
    } else {
      setValidationField(false);
    }

    if ((emailUser.isDirty && emailUser.isEmpty) ||
      (emailUser.isDirty && emailUser.minLengthError) ||
      (emailUser.isDirty && emailUser.emailError) ||
      (emailUserProfile.isDirty && emailUserProfile.isEmpty) ||
      (emailUserProfile.isDirty && emailUserProfile.minLengthError) ||
      (emailUserProfile.isDirty && emailUserProfile.emailError)) {
      setValidationFieldEmail(true);
    } else {
      setValidationFieldEmail(false);
    }

  }, [nameUser.isEmpty,
  nameUserProfile.isEmpty,
  nameUser.minLengthError,
  passwordUser.isEmpty,
  passwordUser.minLengthError,
  emailUser.isDirty,
  emailUser.isEmpty,
  emailUser.emailError,
  emailUserProfile.isEmpty,
  emailUserProfile.minLengthError,
  nameUser.isDirty,
  nameUserProfile.isDirty,
  nameUserProfile.minLengthError,
  passwordUser.isDirty,
  emailUser.minLengthError,
  emailUserProfile.isDirty,
  emailUserProfile.emailError])

  useEffect(() => {
    setErrorMessageName('');
    setErrorMessageEmail('');
    setErrorMessagePassword('');
    serErrorMessageForm(false);
    setSaveProfile(true);
    setErrorMessage('');
    setDurationSaveMovies(false);
    setSuccessfulUpdate(false);

  }, [location])

  function handleOpenBurgerMenu() {
    setBurgerMenu(true);
  }

  function handleCloseBurgerMenu() {
    setBurgerMenu(false);
  };

  function filterMoviesSearch() {
    setPreloader(true);
    setFilterMovies(
      movies.filter(movie => {
        if (isDuration) {
          if (movie.duration < 41) {
            return movie.nameRU.toLowerCase().includes(search.toLowerCase()) || movie.nameEN.toLowerCase().includes(search.toLowerCase())
          }
          return 0;
        }
        return movie.nameRU.toLowerCase().includes(search.toLowerCase()) || movie.nameEN.toLowerCase().includes(search.toLowerCase())
      })
    );
    setTimeout(() => setPreloader(false), 700);
    setSearchingResults(true);
  }


  function filterSaveMoviesSearch() {
    setFilterSaveMovies(
      saveMovies.filter(movie => {
        if (isDurationSaveMovies) {
          if (movie.duration < 41) {
            return movie.nameRU.toLowerCase().includes(searchSave.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchSave.toLowerCase());
          }
          return 0;
        }
        return movie.nameRU.toLowerCase().includes(searchSave.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchSave.toLowerCase());
      })
    );
    setSearchingSaveResults(true);
  }

  function handleLoginIn() {
    setLoggedIn(true)
  };

  function handleTransitionMovies() {
    if (['/saved-movies', '/movies', '/', '/profile', '/signin', '/signup'].includes(location.pathname)) {
      navigate(location.pathname);
    }

  }


  function handleRegister(form) {
    const password = form.password;

    mainApi.register(form).then((form) => {
      if (form) {
        handleLogin({
          email: form.email,
          password: password
        })
      }
    })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Пользователь с таким email уже существует');
      })
  };

  function handleLogin(form) {

    mainApi.authorize(form).then((form) => {
      if (form) {
        handleLoginIn();
        navigate('/movies');
      }
    })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Неправильные почта или пароль');
      })
  };

  function handleEditProfile(form) {
    mainApi.editProfiles(form).then((item) => {
      serErrorMessageForm(false);
      setSaveProfile(true);
      setCurrentUser(item);
      setSuccessfulUpdate(true);
    })
      .catch((err) => {
        console.log(err);
        serErrorMessageForm(true);
        setSaveProfile(false);
        setName(currentUser.user?.name);
        setNameGreeting(currentUser.user?.name);
        setEmail(currentUser.user?.email);
      })
  }

  function handleCreateMovies(movie) {
    mainApi.createMovies({
      country: movie?.country,
      director: movie?.director,
      duration: movie?.duration,
      year: movie?.year,
      description: movie?.description,
      image: `https://api.nomoreparties.co${movie?.image.url}`,
      trailerLink: movie?.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie?.image.url}`,
      movieId: movie?.id,
      nameRU: movie?.nameRU,
      nameEN: movie?.nameEN
    }).then((movie) => {
      setFilterSaveMovies(filterSaveMovies.concat(movie));
      setSaveMovies(saveMovies.concat(movie));
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleDeleteMovies(movieId) {
    mainApi.deleteMovies(movieId).then((movie) => {
      setSaveMovies(saveMovies.filter((i) => i._id !== movie._id));
      setFilterSaveMovies(filterSaveMovies.filter((i) => i._id !== movie._id));
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('search');
    localStorage.removeItem('duration');
    setSearch('');
    setSearchSave('');
    setFilterSaveMovies([]);
    setFilterMovies([]);
    setSearchingResults(false);
    setSearchingSaveResults(false)
    navigate('/');
    setLoggedIn(false);
    setValidationFieldEmail(true);
    setValidationField(true);
  }

  function handleChangeName(e) {
    nameUser.onChange(e);
    setErrorMessageName(e.target.validationMessage);
  }

  function handleChangeNameProfile(e) {
    nameUserProfile.onChange(e);
    setErrorMessageName(e.target.validationMessage);
  }

  function handleChangeEmailProfile(e) {
    emailUserProfile.onChange(e);
    setErrorMessageName(e.target.validationMessage);
  }

  function handleChangeEmail(e) {
    emailUser.onChange(e);
    setErrorMessageEmail(e.target.validationMessage);
  }

  function handleChangePassword(e) {
    passwordUser.onChange(e);
    setErrorMessagePassword(e.target.validationMessage);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='*' element={<Error navigate={navigate} location={location}  loggedIn={loggedIn}/>} />
        <Route path='/' element={

          <>
            <Header
              isOpenBurgerMenu={handleOpenBurgerMenu}
              isCloseBurgerMenu={handleCloseBurgerMenu}
              isBurgerMenu={isBurgerMenu}
              buttonProfile='__button'
              loggedIn={loggedIn} />
            <Main />
            <Footer /></>
        } />

        <Route path='/movies' element={<ProtectedRoute loggedIn={loggedIn}>
          <Header
            loggedIn={loggedIn}
            pathToPage='/profile'
            isOpenBurgerMenu={handleOpenBurgerMenu}
            isCloseBurgerMenu={handleCloseBurgerMenu}
            isBurgerMenu={isBurgerMenu} />
          <Movies
            isBurgerMenu={isBurgerMenu}
            moviesButton={filterMoviesSearch}
            movies={filterMovies}
            onSearch={setSearch}
            search={search}
            onDuration={setDuration}
            duration={isDuration}
            searchingResults={searchingResults}
            onSearchingResults={setSearchingResults}
            onFilterMovies={setFilterMovies}
            onCreateMovies={handleCreateMovies}
            saveMovies={saveMovies}
            preloader={preloader}
            resultRequestServer={resultRequestServer}
            onDeleteMovies={handleDeleteMovies}
          />
          <Footer />
        </ProtectedRoute>} />
        <Route path={loggedIn ? '' : '/signin'} element={<Login
          onLogin={handleLogin}
          errorMessageEmail={errorMessageEmail}
          errorMessagePassword={errorMessagePassword}
          emailUser={emailUser}
          passwordUser={passwordUser}
          onChangeEmail={handleChangeEmail}
          onChangePassword={handleChangePassword}
          validationField={validationField}
          validationFieldEmail={validationFieldEmail}
          errorMessage={errorMessage}
        />} />

        <Route path={loggedIn ? '' : '/signup'} element={<Register
          onRegister={handleRegister}
          errorMessageName={errorMessageName}
          errorMessageEmail={errorMessageEmail}
          errorMessagePassword={errorMessagePassword}
          errorMessage={errorMessage}
          nameUser={nameUser}
          emailUser={emailUser}
          passwordUser={passwordUser}
          onChangeName={handleChangeName}
          onChangeEmail={handleChangeEmail}
          onChangePassword={handleChangePassword}
          validationField={validationField}
          validationFieldEmail={validationFieldEmail} />} />

        <Route path='/saved-movies' element={<ProtectedRoute loggedIn={loggedIn}>
          <Header
            isOpenBurgerMenu={handleOpenBurgerMenu}
            isCloseBurgerMenu={handleCloseBurgerMenu}
            isBurgerMenu={isBurgerMenu}
            loggedIn={loggedIn} />
          <SavedMovies
            isBurgerMenu={isBurgerMenu}
            saveMovies={saveMovies}
            filterSaveMovies={filterSaveMovies}
            search={searchSave}
            userId={userId}
            onDeleteMovies={handleDeleteMovies}
            moviesButton={filterSaveMoviesSearch}
            searchingResults={searchingSaveResults}
            onDuration={setDurationSaveMovies}
            duration={isDurationSaveMovies}
            onSearch={setSearchSave}
            onSearchingResults={setSearchingSaveResults}
            onFilterMovies={setFilterSaveMovies} />
          <Footer />
        </ProtectedRoute>} />

        <Route path='/profile' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Header
              isOpenBurgerMenu={handleOpenBurgerMenu}
              isCloseBurgerMenu={handleCloseBurgerMenu}
              isBurgerMenu={isBurgerMenu}
              loggedIn={loggedIn} />
            <Profile
              isBurgerMenu={isBurgerMenu}
              onSignOut={handleSignOut}
              onEditProfile={handleEditProfile}
              errorMessageEmail={errorMessageEmail}
              errorMessageName={errorMessageName}
              emailUser={emailUserProfile}
              nameUser={nameUserProfile}
              onChangeName={handleChangeNameProfile}
              onChangeEmail={handleChangeEmailProfile}
              validationField={validationField}
              validationFieldEmail={validationFieldEmail}
              errorMessageForm={errorMessageForm}
              isSaveProfile={isSaveProfile}
              onSaveProfile={setSaveProfile}
              name={name}
              setName={setName}
              nameGreeting={nameGreeting}
              setNameGreeting={setNameGreeting}
              setEmail={setEmail}
              email={email}
              successfulUpdate={successfulUpdate}
              onSuccessfulUpdate={setSuccessfulUpdate}
            />
          </ProtectedRoute>} />
      </Routes>

    </CurrentUserContext.Provider>

  );
}

export default App;
