import React from 'react';
import config from '../config';

class Register extends React.Component {

    constructor(){
        super();
        this.state =  {
            name: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    createHandler = (property) => {
        return (event) => {
            let aux = {};
            aux[property] = event.target.value;
            this.setState (aux);
        }
    };

    save = () => {
        fetch(config.apiUrl +'register', {
            headers :{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(this.state),
            method: 'POST'
        })
            .then(response => {
                if (response.status == 201){
                    // creatdo con exito!
                    alert('Registro con exito!!!!!');
                    window.location.href = '/';
                } else {
                    alert('No se pudo registrar!!');
                }
            })
    };

    render(){
        console.log(this.state);
        return (
            <div>
                name: <input type='text' onChange={this.createHandler('name')}/> <br/>
                lastname: <input type='text' onChange={this.createHandler('lastname')}/> <br/>
                email: <input type='text' onChange={this.createHandler('email')}/> <br/>
                password: <input type='password' onChange={this.createHandler('password')}/> <br/>
                <button onClick={this.save}> Crear usuario!</button>
            </div>
        )
    }
}

export default Register;