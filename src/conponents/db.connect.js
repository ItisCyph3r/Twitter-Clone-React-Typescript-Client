import React, { Component } from 'react'

export default class DBconnect extends Component {

    constructor(){
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('/api')
        .then((response) => response.json())
        .then(body => {
            this.setState({data: body}, () => console.log(this.state))
        });
    }

    render() {
        return (
        <>
            {
                this.state.data.map((data) => (
                    <>
                        <h1> {data.name} </h1>
                        <img src={data.posterImage} alt=''/>
                    </>
                ))
            }
        </>
        )
    }
}
