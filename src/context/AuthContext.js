import React from 'react';
import jwtDecode from 'jwt-decode';

export default (ComposedComponent) => {
    class Authenticate extends React.Component {

        componentDidMount() {
            const token = localStorage.getItem('tokenId');
            if (!token || (jwtDecode(token).exp < (Date.now() / 1000))) {
                this.props.history.push('/');
                localStorage.removeItem('tokenId');
            }
        }
        render() { 
            return (
                <ComposedComponent />
            );
        }
    }
    return Authenticate;
}
