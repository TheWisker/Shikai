//function window.lightdm.can_suspend ? ae("Suspending system.", window.lightdm.suspend) : window.notifications.generate("".concat(e, " is disabled on this system."), "error")


import ReactLogo from '../assets/media/buttons/reboot.svg';
class Option extends React.Component {
    constructor(props) {
        super(props);

    }  

    render() {
        return (
            <div class="option">
                <div class="icon"><ReactLogo/></div>
                <div class="text">{this.props.name}</div>
            </div>
        );
    }
}


let domContainer = document.getElementById("options");

//let reb = (<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="95px" height="94.964px" viewBox="264.14 221.317 95 94.964" enable-background="new 264.14 221.317 95 94.964" xml:space="preserve"><path stroke="currentColor" stroke-width="1px" d="M357.133,255.171c-5.879-19.633-24.02-33.854-45.493-33.854c-26.233,0-47.5,21.242-47.5,47.476c0,26.234,21.267,47.488,47.5,47.488s47.5-21.224,47.5-47.458c0-1.568-0.078-3.257-0.227-4.605h-5.393c0.167,1.348,0.256,3.028,0.256,4.599c0,23.271-18.865,42.113-42.137,42.113s-42.137-18.877-42.137-42.149s18.866-42.143,42.137-42.143c14.922,0,28.031,7.756,35.517,19.458l-15.188,0.005l18.711,6.839"/></svg>);
//let reb = (<img src="assets/media/buttons/reboot.svg"/>);




ReactDOM.render(<Option name="REBOOT"/>, domContainer);