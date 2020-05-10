import React, { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { GoogleLogin } from 'react-google-login';
import { NotificationContext } from '../../context/Notification';

const LoginPage = () => {
    const [profile, setProfile] = useState({ name: "", email: "", imageUrl: "", isAuthenticated: false });
    const { dispatchNotification } = useContext(NotificationContext);
    const responseGoogle = (response) => {
        if (!response.error) {
            setProfile({
                name: response.profileObj.name,
                email: response.profileObj.email,
                imageUrl: response.profileObj.imageUrl,
                isAuthenticated: true
            })
        } else {
            dispatchNotification({ type: 'ERROR', message: response.error })
        }
      }

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
                        
                        { profile.isAuthenticated ?
                            <>
                                <img alt="" className="mb-2" src={profile.imageUrl}/><br/>
                                <h3> Welcome {profile.name}</h3>
                                <h3>{profile.email}</h3>
                            </> : 
                            <>
                            <img alt="" className="mb-2" src="/avatar.svg"/><br/>
                            </>
                        }
                        <GoogleLogin
                            clientId="836665779366-toahgnmpr6h48p47gs1l1cf3v3ncbphn.apps.googleusercontent.com"
                            buttonText="LOGIN"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default LoginPage;