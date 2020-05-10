import React from 'react';

export default (ComposedComponent) => {
    class Authenticate extends React.Component {

        componentWillMount() {
            const email = localStorage.getItem('email');
            if (!email) {
                this.props.history.push('/');
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
