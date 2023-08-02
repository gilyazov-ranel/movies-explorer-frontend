export default class MainApi {
    constructor(basePath, token) {
        this._basePath = basePath;
        this._token = token;
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _getHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this._token}`
        }
    }

    getMovies() {
        return fetch(`${this._basePath}/movies`, {
            headers: this._getHeaders()
        }).then(this._getJson);
    };

    getUsers() {
        return fetch(`${this._basePath}/users/me`, {
            headers: this._getHeaders()
        }).then(this._getJson);
    };

    editProfiles(item) {
        return fetch(`${this._basePath}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify(item)
        }).then(this._getJson);
    }

    createMovies(item) {
        return fetch(`${this._basePath}/movies`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(item)
        }).then(this._getJson);
    }

    deleteMovies(moviesId) {
        return fetch(`${this._basePath}/movies/${moviesId}`, {
            method: 'DELETE',
            headers: this._getHeaders()
        }).then(this._getJson);
    }

    register(form) {
        return fetch(`${this._basePath}/signup`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(form)
        })
            .then(this._getJson)
    };

    authorize(form) {
        return fetch(`${this._basePath}/signin`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(form)
        }).then(this._getJson)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    return data;
                }
            })
    };

    // checkToken(token) {
    //     return fetch(`${this._basePath}/users/me`, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then(this._getJson)
    //         .then(data => data)
    // };

}

// const mainApi = new MainApi('https://api.project.movies.nomoreparties.sbs')

