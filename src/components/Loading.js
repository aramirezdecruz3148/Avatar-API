import Component from './Component.js';

class Loading extends Component {

    renderTemplate() {
        return /*html*/`
            <div>
                <img src="../../assets/loading.gif" alt="loading...">
            </div>
        `;
    }
}

export default Loading;