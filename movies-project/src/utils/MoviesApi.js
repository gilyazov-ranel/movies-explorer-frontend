class MoviesApi {
    constructor(baseApi) {
        this._baseApi = baseApi;
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
        };
    }

    getMovies() {
        return fetch(`${this._baseApi}`, {
            headers: this._getHeaders()
        }).then(this._getJson);
    };
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export { moviesApi }