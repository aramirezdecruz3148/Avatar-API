import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
        <header>    
            <h1 id="title">Avatar: The Last Airbender</h1>
            <a id="home" href="">Show All Characters</a>
        </header>
        `;
    }
}

export default Header;