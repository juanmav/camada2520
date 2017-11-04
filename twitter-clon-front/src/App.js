import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TweetList from './components/Tweet/TweetList';
import TweetForm from './components/Tweet/TweetForm';

class App extends Component {
    constructor(){
        super();

        let login = localStorage.getItem('token');

        this.state = {
            login : login
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Twitter-Clon</h1>
                </header>
                <div className="App-intro">
                    {
                        this.state.login ?
                            <Router>
                                <div>
                                    <Route path={'/'} exact={true} component={TweetList}/>
                                    <Route path={'/tweet/add'} exact={true} component={TweetForm}/>
                                    <Route
                                        path={'/tweet/edit/:tweetId'}
                                        exact={true}
                                        render={({match}) => <TweetForm tweetId={match.params.tweetId}/>}
                                    />
                                </div>
                            </Router>
                            :
                            <Router>
                                <div>
                                    <Route path={'/'} exact={true} component={Login}/>
                                    <Route path={'/register'} exact={true} component={Register}/>
                                </div>
                            </Router>
                    }
                </div>
            </div>
        );
    }
}

export default App;
