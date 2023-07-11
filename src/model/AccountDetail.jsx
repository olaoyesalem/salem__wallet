import React from 'react';
//import Account from './Account';

class AccountDetail extends React.Component {
  render() {
    const { account } = this.props;
    return (
      <div>Address: {account.address} </div>
    );
  }
}

export default AccountDetail;
