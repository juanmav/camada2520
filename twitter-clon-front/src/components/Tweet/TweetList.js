import React from 'react';
import TweetItem from './TweeItem';
import config from '../../config';

class TweetList extends React.Component {

    constructor(){
        super();
        this.state = {
            tweets : []
        }
    }

    componentDidMount(){
        fetch(config.apiUrl + 'tweets',{
            headers :{
                "Content-Type" : "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: 'GET'
        })
            .then(response => response.json())
            .then( tweets => this.setState({tweets: tweets}));
    }

    goToCreate = () => {
        window.location.href = '/tweet/add';
    };

    logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    render(){
        console.log(this.state);
        return(
            <div>
                <button onClick={this.logout}> Salir!</button>
                <button onClick={this.goToCreate}> Crear Tweet </button>
                <hr/>
                {
                    this.state.tweets.map( t => <TweetItem {...t}/>)
                }
            </div>
        )
    }
}

export default TweetList;