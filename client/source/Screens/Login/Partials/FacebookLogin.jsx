import React, {Component} from 'react';
import { Redirect } from 'react-router';

export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
        
        this.onLoginPress = this.onLoginPress.bind(this)
    }

    componentWillMount() {
        var sdkLoaded = this.loadFacebookSdk();

        sdkLoaded.then(() => {
            this.checkLoginStatus();
        });
    }

    userLoggedIn() {
        this.setState({
            loggedIn: true
        });
    }

    onLoginPress() {
        this.checkLoginStatus();
        this.tryToLogin();
    }

    checkLoginStatus() {
        FB.getLoginStatus((response) => {
            if (response.status == "login") {
                this.userLoggedIn()
            }
            return response.status;
        })
    }

    tryToLogin() {
        let requiredInfo = 'user_birthday,user_hometown,email,public_profile';
        FB.login((response) => {
            debugger;
            this.userLoggedIn()
        }, {scope: requiredInfo})
    }

    loadFacebookSdk() {
        let fnResolve = null;
        var sdkLoadedPromise = new Promise((resolve, reject) => {
          fnResolve = resolve;
        });
    
        window.fbAsyncInit = function() {
          FB.init({
            appId: '2014370365475530',
            cookie: true,
            xfbml: true,
            version: 'v2.10'
          });
          FB.AppEvents.logPageView();
          fnResolve();
        };
    
        (function(d, s, id) {
          if (d.getElementById(id)) { return; }
          
          let fjs = d.getElementsByTagName(s)[0],
              js = d.createElement(s);
          
          js.id = id;
          js.src = '//connect.facebook.net/en_US/sdk.js';
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    
        return sdkLoadedPromise;
      }

    render() { 
        if (this.state.loggedIn) 
            return ( <Redirect to={ {pathname: "/home"} } />)
        
        return ( <li onClick={this.onLoginPress} /> )
    }
}