import React from 'react';
import { generateKeys } from '../../utils/AccountUtils';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  handleRecoverSubmit = () => {
    this.generateAccount();
  };

  generateAccount = () => {
    const { seedPhrase } = this.state;
    const keys = generateKeys(seedPhrase);
    console.log(keys);
  };

  render() {
    const { showInput, seedPhrase } = this.state;

    return (
      <div className="container mt-4">
        <button className="btn btn-success mr-2" onClick={this.handleClick}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={this.handleRecoverClick}>
          Recover Account
        </button>
        {showInput && (
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              value={seedPhrase}
              onChange={this.handleInputChange}
              onKeyPress={this.handleInputEnter}
              placeholder="Enter Seed Phrase or Private Key"
            />
            <button className="btn btn-success mt-2" onClick={this.handleRecoverSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AccountCreate;
