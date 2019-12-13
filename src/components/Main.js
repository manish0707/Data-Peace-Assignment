import React from 'react';
import '../styles/Main.css';
import axios from 'axios'
import PerPage from '../components/PerPage';
import { mySort }  from '../Helpers';
import uuid from 'uuid/v4'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : [],
      currentUsers: [],
      usersPerPage : 5
    }
    this.sortUserData = this.sortUserData.bind(this);
    this.getMoreUsers = this.getMoreUsers.bind(this);
  }
  async componentDidMount() {
    const response = await axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json');
    this.setState({userInfo : response.data});

    const indexOfLastUser = 1 * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = this.state.userInfo.slice(indexOfFirstUser, indexOfLastUser);

    this.setState({currentUsers : currentUsers});
  }
  sortUserData(evt) {
    const sortby = evt.target.textContent.toUpperCase();
    const sorted = mySort(this.state.currentUsers, sortby);
    this.setState({currentUsers : sorted});
  }
  getMoreUsers(evt) {
    console.log(this.state.currentPage);
    const buttonNumber = evt.target.textContent;
    const indexOfLastUser = buttonNumber * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = this.state.userInfo.slice(indexOfFirstUser, indexOfLastUser);

    this.setState({currentUsers : currentUsers});
  }
  render() {
    const tableHeading = [
      'Id', 'FirstName', 'LastName',
      'Age', 'Company', 'State',
      'City', 'Zip', 'Email'
  ]
    return (
      <div className="Main">
       <h3>Data Peace Assignment</h3>
        <table>
          <tbody>
            <PerPage users={this.state.currentUsers} 
              tableHeading={tableHeading} 
              sortUserData={this.sortUserData}
               />
          </tbody>
        </table>
        <div className="pagination-wrapper">
          {Array.apply(null, new Array(10)).map((arr,index) => (
            <button key={uuid()} onClick={this.getMoreUsers }>{index + 1}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
