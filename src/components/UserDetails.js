import React, { Component } from 'react'
import axios from 'axios'
import '../styles/UserDetails.css';
import uuid from 'uuid/v4'
export class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eachUserInfo : {}
        }
    }
    componentDidMount() {
        axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json')
        .then(response => {
            const eachUser = response.data.filter(user => (
                user.id === Number(this.props.match.params.id)
            ));
            this.setState({eachUserInfo : eachUser[0]});
        }).catch(error => {
            console.log(error, 'There was an error!!');
        })
    }
    render() {
        const { first_name, last_name } = this.state.eachUserInfo;
        return (
            <div className="user-details">
                <h1 className="user-details-name">{first_name} {last_name}</h1>
                <div className="user-details-other-info">
                    {Object.entries(this.state.eachUserInfo).map(entry => (
                        <div className="user-details-eachrow" key={uuid()}>
                            <span className="user-details-key">{entry[0]}</span>
                            <span className="user-details-values">{entry[1]}</span>
                        </div>
                    ))}
                    </div>
            </div>
        )
    }
}

export default UserDetails

