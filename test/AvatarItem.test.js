import AvatarItem from '../src/components/AvatarItem.js';
const test = QUnit.test;

QUnit.module('Avatar Item');

test('renders template from data', assert => {
    //arrange
    const character = {
        _id: '5cdf0769b6e02a467e3e766b',
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        name: '46th Earth King'
    };
    
    //act
    const avatarItem = new AvatarItem({ character });
    const rendered = avatarItem.renderTemplate();

    //assert
    assert.htmlEqual(rendered, /*html*/`
        <li class="avatar-item">
            <h3>46th Earth King</h3>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        </li>    
    `);
});