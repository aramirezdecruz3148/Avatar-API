import Component from './Component.js';

class AvatarItem extends Component {
 
    renderTemplate() {
        const character = this.props.character;
        const enemyLink = new URLSearchParams();
        const alliesLink = new URLSearchParams();
        enemyLink.set('enemies', character.enemies);
        alliesLink.set('allies', character.allies);
        if(!character.photoUrl) {
            character.photoUrl = '../../../assets/placeholder.jpg';
        }
        const characterName = character.name.replace(' ', '+');
        return /*html*/`
            <li class="avatar-item">
                <h3>${character.name}</h3>
                <a class="link" href="#enemies=${characterName}">Enemies</a>
                <a class="link" href="#allies=${characterName}">Allies</a>
                <img src="${character.photoUrl}" alt="${character.name}">
            </li>
        `;
    }
}

export default AvatarItem;