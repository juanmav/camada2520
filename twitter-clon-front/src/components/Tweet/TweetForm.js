import React from 'react'
import config from '../../config';

class TweetForm extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    save = () => {
        console.log(this.state);

        fetch(config.apiUrl +'tweets', {
            headers :{
                "Content-Type" : "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            body: JSON.stringify(this.state),
            method: 'POST'
        })
            .then(response => {
                if (response.status == 201){
                    // creatdo con exito!
                    alert('Creado con exito!!!!!');
                    window.location.href = '/';
                } else {
                    alert('No se pudo generar el tweet!');
                }
            })
    };

    handleMessage = (event) => {
        this.setState({ message: event.target.value})
    };

    render(){
        console.log(this.state);
        return (
            <div>
                message: <input type='text' onChange={this.handleMessage}/>
                <button onClick={this.save}> Crear! </button>
            </div>
        )
    }
}

export default TweetForm;