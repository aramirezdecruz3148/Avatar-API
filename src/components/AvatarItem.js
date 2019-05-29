import Component from './Component.js';

class AvatarItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        if(!character.photoUrl) {
            character.photoUrl = '../../../assets/placeholder.jpg';
        }
        return /*html*/`
            <li class="avatar-item">
                <h3>${character.name}</h3>
                <img src="${character.photoUrl}" alt="${character.name}">
            </li>
        `;
    }
}

export default AvatarItem;