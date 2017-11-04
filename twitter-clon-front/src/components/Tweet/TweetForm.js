import React from 'react'
import config from '../../config';

class TweetForm extends React.Component {

    constructor(props){
        super(props);
        console.log(props.tweetId);
        this.state = {

        }
    }

    componentDidMount() {
        if(this.props.tweetId){
            fetch(config.apiUrl + 'tweets/' + this.props.tweetId ,{
                headers :{
                    "Content-Type" : "application/json",
                    "x-access-token": localStorage.getItem('token')
                },
                method: 'GET'
            })
                .then(response => response.json())
                .then( tweet => this.setState({...tweet}));

        } else {
            console.log('Es una creacion!');
        }
    }

    save = () => {
        console.log(this.state);

        fetch(config.apiUrl +'tweets/' + (this.props.tweetId ? this.props.tweetId : ''),
            {
                headers :{
                    "Content-Type" : "application/json",
                    "x-access-token": localStorage.getItem('token')
                },
                body: JSON.stringify(this.state),
                method: (this.props.tweetId ? 'PUT' : 'POST')
            }
        )
            .then(response => {
                if (response.status == 201 || response.status == 202){
                    // creatdo con exito!
                    alert('Salvado con exito!');
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
                message: <input type='text' onChange={this.handleMessage} value={this.state.message}/>
                <button onClick={this.save}> Crear! </button>
            </div>
        )
    }
}

export default TweetForm;