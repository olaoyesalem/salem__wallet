import React from 'react';
import { generateKeys } from '../../utils/AccountUtils';

class AccountCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      seedPhrase: '',
    };
  }

  handleClick = () => {
    // Function to create an account
    console.log('Creating an account...');
    const keys = generateKeys();
    console.log(keys);
  };

  handleRecoverClick = () => {
    this.setState({ showInput: true });
  };

  handleInputChange = (event) => {
    this.setState({ seedPhrase: event.target.value });
  };

  handleInputEnter = (event) => {
    if (event.key === 'Enter') {
      this.generateAccount();
    }
  };

  generateAccount = () => {
    const { seedPhrase } = this.state;
    const keys = generateKeys(seedPhrase);
    console.log(keys);
  };

  render() {
    const { showInput, seedPhrase } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Create Account</button>
        <button onClick={this.handleRecoverClick}>Recover Account</button>
        {showInput && (
          <div>
            <input
              type="text"
              value={seedPhrase}
              onChange={this.handleInputChange}
              onKeyPress={this.handleInputEnter}
              placeholder="Enter Seed Phrase or Private Key"
            />
          </div>
        )}
      </div>
    );
  }
}

export default AccountCreate;
