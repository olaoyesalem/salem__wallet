import React, {useEffect, useState} from 'react';
import { Account } from '../../models/Account';
import { ethers } from 'ethers';
import { toFixedIfNecessary } from '../../utils/AccountUtils';
import './Account.css';

interface AccountDetailProps {
  account: Account
}

const AccountDetail: React.FC<AccountDetailProps> = ({account}) => {


  return (
  <div>Address : {account.address}</div>
  )
}

export default AccountDetail;