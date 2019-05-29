const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const avatarApi = {
    getCharacters(search) {
        let url = URL;
        url = `${URL}?${search}`;
        console.log(url);
        return fetch(url)
            .then(response => response.json());
    }
};

export default avatarApi;