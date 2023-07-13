import React from "react";
import PropTypes from "prop-types";
import { Account } from '../../models/Account';

const AccountDetail = ({ account }) => {
  return (
    <div>
      Address :{account.address}
    </div>
  );
};


AccountDetail.propTypes = {
  account: PropTypes.instanceOf(Account)
};


export default AccountDetail;
