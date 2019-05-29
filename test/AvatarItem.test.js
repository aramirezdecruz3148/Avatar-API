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
    const characterName = character.name.replace(' ', '+');


    //assert
    assert.htmlEqual(rendered, /*html*/`
    <li class="avatar-item">
        <h3>${character.name}</h3>
        <a class="link" href="#enemies=${characterName}">Enemies</a>
        <a class="link" href="#allies=${characterName}">Allies</a>
        <img src="${character.photoUrl}" alt="${character.name}">
    </li>  
    `);
});