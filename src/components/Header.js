import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
        <header>    
            <h1 id="title">Avatar: The Last Airbender</h1>
            <h2>Character Profiles</h2>
        </header>
        `;
    }
}

export default Header;