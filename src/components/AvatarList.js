import Component from './Component.js';

class AvatarList extends Component {

    renderTemplate() {
        return /*html*/`
            <ul class="avatar-list">
                <li class="avatar-item">
                    <h3>46th Earth King</h3>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
                </li>
                <li class="avatar-item">
                    <h3>Aang</h3>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003" alt="Aang">
                </li>
                <li class="avatar-item">
                    <h3>Aang (games)</h3>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/2/21/Into_The_Inferno_Aang.png/revision/latest?cb=20131009060746" alt="Aang (games)">
                </li>
            </ul>
        `;
    }
}

export default AvatarList;