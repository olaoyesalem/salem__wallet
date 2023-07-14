import React, { useCallback, useEffect, useState } from 'react';
import { generateAccount } from '../../utils/AccountUtils';
import { Account } from '../../models/Account';
import AccountDetail from '../Account/Accountdetail';

const recoveryPhraseKeyName = 'recoveryPhrase';

function AccountCreate() {
  const [seedphrase, setSeedphrase] = useState('');
  const [account, setAccount] = useState<Account | null>(null);
  const [showRecoverInput, setShowRecoverInput] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSeedphrase(event.target.value);
  }

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      recoverAccount(seedphrase);
    }
  };

  const recoverAccount = useCallback(async (recoveryPhrase: string) => {
    const result = await generateAccount(recoveryPhrase);
    setAccount(result.account);

    if (localStorage.getItem(recoveryPhraseKeyName) !== recoveryPhrase) {
      localStorage.setItem(recoveryPhraseKeyName, recoveryPhrase);
    }
  }, []);

  useEffect(() => {
    const localStorageRecoveryPhrase = localStorage.getItem(recoveryPhraseKeyName);
    if (localStorageRecoveryPhrase) {
      setSeedphrase(localStorageRecoveryPhrase);
      recoverAccount(localStorageRecoveryPhrase);
    }
  }, [recoverAccount]);

  async function createAccount() {
    const result = await generateAccount();
    setAccount(result.account);
  }

  return (
    <div className='AccountCreate p-5 m-3 card shadow'>
      <h1> ⚡Salem Wallet ⚡</h1>
      <form onSubmit={event => event.preventDefault()}>
        <button type="button" className="btn btn-success" onClick={createAccount}>
          Create Account
        </button>
        <button
          type="button"
          className="btn btn-outline-success ml-3"
          onClick={() => (showRecoverInput ? recoverAccount(seedphrase) : setShowRecoverInput(true))}
          disabled={showRecoverInput && !seedphrase}
        >
          Recover Account
        </button>
        {showRecoverInput && (
          <div className="form-group mt-3">
            <input
              type="text"
              placeholder="Seedphrase or private key for recovery"
              className="form-control"
              value={seedphrase}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
      </form>
      {account && (
        <>
          <hr />
          <AccountDetail account={account} />
        </>
      )}
    </div>
  );
}

export default AccountCreate;
