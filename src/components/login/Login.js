import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class LoginPage extends React.Component {
    componentDidMount() {
        const email = localStorage.getItem('email');
        if (email) {
            this.props.history.push('/home');
        }
    }
    render() { 
    return (
        <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand to="/home">
            <img
                alt=""
                src="/reading.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
                Reading List App
            </Navbar.Brand>
        </Navbar>
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