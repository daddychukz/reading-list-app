import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';

const Navigation = (props) => {
    const [logout, setLogout] = useState(false);
    const logoutUser = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('tokenId');
        setLogout(true);
    }
    return (
        <Navbar className="bg-light justify-content-between">
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
            {
                props.showLogout ? 
                (
                    <Button variant="dark" size="sm" className="d-inline-block align-right" onClick={logoutUser}>
                            Logout
                    </Button>
                ) : null
            }
            {
                logout ? window.location.reload() : null
            }
            
        </Navbar>
    );
}
 
export default Navigation;