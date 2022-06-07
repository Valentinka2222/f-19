import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  itemsPerPage = 3;

  prevBtnHandler = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };
  nextBtnHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const users = this.props.users;
    const { currentPage } = this.state;

    const usersToRender = users.slice(
      (currentPage - 1) * this.itemsPerPage,
      (currentPage - 1) * this.itemsPerPage + this.itemsPerPage,
    );
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goNext={this.nextBtnHandler}
          goPrev={this.prevBtnHandler}
          totalItems={usersToRender.length}
          itemsPerPage={this.itemsPerPage}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
