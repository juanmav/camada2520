import React from 'react';

class TweeItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.message}
                <br/>
                {this.props.author.name}
                <br/>
                <hr/>
            </div>
        )
    }
}

export default TweeItem;