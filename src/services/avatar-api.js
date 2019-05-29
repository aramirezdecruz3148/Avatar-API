const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const avatarApi = {
    getCharacters(search) {
        let url = URL;
        if(search) {
            const searchParams = new URLSearchParams();
            searchParams.set('search', search);
            const query = searchParams.toString();
            url = `${URL}?${query}`;
        }
        return fetch(url)
            .then(response => response.json());
    }
};

export default avatarApi;