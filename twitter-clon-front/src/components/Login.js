import React from 'react';
import config from '../config';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(){
        super();
        this.state =  {
            email: '',
            password: ''
        }
    }

    login = () => {
        console.log(this.state);
        fetch(config.apiUrl + 'login', {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
            method: 'POST'
        })
            .then( response => {
                if (response.status == 201){
                    return response.json();
                } else {
                    return null;
                }
            })
            .then(data => {
                if (data){ // Login con existo
                    // Guardo token
                    // Y voy a / pero logueado.
                    console.log('Login con exito!');
                    localStorage.setItem('token', data.token);
                    window.location.href = '/';
                } else {
                    this.setState({error : true});
                    alert('No te pudiste loguear')
                }
            })
    };

    handleEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    render(){
        console.log(this.state);
        return (
            <div>
                email: <input onChange={this.handleEmail} type='text'/><br/>
                password: <input onChange={this.handlePassword} type='password'/><br/>
                <button onClick={this.login}>login!</button>
                <Link to={'/register'}>Registrarme</Link>
            </div>
        )
    }
}

export default Login;