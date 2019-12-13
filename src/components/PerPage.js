import React from 'react'
import UserRow from './UserRow'
import '../styles/PerPage.css';

export default class PerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search : ""
        }
        this.onchangeHandle = this.onchangeHandle.bind(this);
    }
      onchangeHandle(evt) {
        this.setState({search : evt.target.value});
      }
    render() {
        const filteredData = this.props.users.filter(user => {
            return user.first_name.toUpperCase().includes(this.state.search.toUpperCase());
          });
        return (
            <React.Fragment>
                <div className="inputWrapper">
                    <input type="text" onChange={this.onchangeHandle} placeholder="Filter By First Name" />
                </div>
                <tr className="tableHeadingWrapper">
                  {
                    this.props.tableHeading.map((heading, index) => (
                        <td className="tableHeading" onClickCapture={this.props.sortUserData} key={index}>
                            <i className="fas fa-arrow-down arrow-icon">{heading}</i>
                        </td>
                    ))
                  }
                </tr>
                   {filteredData.map(user => (
                <UserRow
                    key={user.id}
                    id={user.id}
                    firstname={user.first_name} 
                    lastname={user.last_name}
                    age={user.age}
                    company={user.company_name} 
                    state={user.state}
                    city={user.city}
                    zip={user.zip}
                    email = {user.email}
             />
            ))}
            </React.Fragment>
        )
    }
}
