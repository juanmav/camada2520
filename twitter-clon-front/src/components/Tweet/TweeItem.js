import React from 'react';
import { Link } from 'react-router-dom';
import decode  from 'jwt-decode'

class TweeItem extends React.Component {
    constructor(props){
        super(props);
        this.user = decode(localStorage.getItem('token'));
    }

    render(){
        return (
            <div>
                {this.props.message}
                <br/>
                {this.props.author.name}
                <br/>
                {
                    (this.user._id == this.props.author._id) || this.user.isAdmin ?
                        <Link to={"/tweet/edit/" + this.props._id}>Editar</Link>
                        :
                        null
                }
                <hr/>
            </div>
        )
    }
}

export default TweeItem;