import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class LoginPage extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem('tokenId');
        if (token && (jwtDecode(token).exp > (Date.now() / 1000))) {
            window.location.replace('/home');
        }
    }
    render() { 
    return (
        <>
        <img className="wave" alt="" src="/wave.png"/>
            <div className="container">
                <div className="img">
                    <img alt="" src="/reading.svg"/>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        
                        { this.props.auth.profile.isAuthenticated ?
                            <>
                                <Redirect to="/home" />
                            </> : 
                            <>
                            <img alt="" className="mb-2" src="/avatar.svg"/><br/>
                            </>
                        }
                        <GoogleLogin
                            clientId="836665779366-toahgnmpr6h48p47gs1l1cf3v3ncbphn.apps.googleusercontent.com"
                            buttonText="LOGIN"
                            onSuccess={this.props.auth.responseGoogle}
                            onFailure={this.props.auth.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        
                    </form>
                </div>
            </div>
        </>
    );
    }
}
 

export default LoginPage;