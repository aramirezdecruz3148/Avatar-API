import Component from './Component.js';
import Header from './Header.js';
import AvatarList from './AvatarList.js';
import avatarApi from '../services/avatar-api.js';
import Loading from './Loading.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const avatarList = new AvatarList({ characters: [] });
        main.appendChild(avatarList.render());

        const loading = new Loading();
        main.appendChild(loading.render());

        avatarApi.getCharacters()
            .then(characters => {
                avatarList.update({ characters });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {

            });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;