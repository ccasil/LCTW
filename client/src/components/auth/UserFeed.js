
import React, { Component } from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../common/Spinner";

class UserFeed extends Component {
  render() {
    const { users } = this.props;
    let userContent;

      if (users === null) {
            userContent = <Spinner />;
        } else {
          userContent = users.map(user => (
              <UserItem key={user._id} user={user}/>))
        }

    return (
        <div className="feed">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <table className="table">
                                 <thead>
                                     <tr>
                                         <th scope="col">Name</th>
                                         <th scope="col">Email</th>
                                         <th scope="col">Admin</th>
                                         <th scope="col">Actions</th>
                                     </tr>
                                 </thead>
                                 <tbody>{userContent}</tbody>
                             </table>
                         </div>
                     </div>
                 </div>
             </div>
        


        // users.map(user => <UserItem key={user._id} user={user} />)


)
    
    
    
    
    ;
  }
}

UserFeed.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserFeed;




// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import Spinner from "../common/Spinner";
// import { getUsers } from "../../actions/authActions";

// class UserFeed extends Component {

//     componentDidMount() {
//         this.props.getUsers();
//     }

//     render() {
//         const users = this.props.user;
//         let userContent;
//         console.log("at users this the props", this.props);

//         if (users === null) {
//             userContent = <Spinner />;
//         } else {
//             userContent = users.map(user => <tr key={user._id} user={user}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{JSON.stringify(user.adminLevel)}</td>
//                 <td>
//                     <select>
//                         <option value="admin">Admin</option>
//                         <option value="normal">Normal</option>
//                         <option value="delete">Delete</option>
//                     </select>
//                 </td>
//             </tr>);
//         }

//         return (
//             <div className="feed">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <table className="table">
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">Name</th>
//                                         <th scope="col">Email</th>
//                                         <th scope="col">Admin</th>
//                                         <th scope="col">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>{userContent}</tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// UserFeed.propTypes = {
//     getUsers: PropTypes.func.isRequired,
//     user: PropTypes.array.isRequired
// };

// const mapStateToProps = state => (
//     console.log("123", state),
//     {
//         user: state.user.users
//     }
// );

// export default connect(
//     mapStateToProps,
//     { getUsers }
// )(UserFeed);
