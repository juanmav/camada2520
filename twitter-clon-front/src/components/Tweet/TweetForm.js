import React from 'react'

class TweetForm extends React.Component {

    constructor(){
        super();
        this.state = {

        }
    }

    save = () => {
        console.log(this.state);
    };

    render(){
        return (
            <div>
                Formulario de creacion!
            </div>
        )
    }
}

export default TweetForm;