import React from 'react';
import { generateKeys } from '../../utils/AccountUtils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AccountCreate.css'; // Import custom CSS styles

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
        <div className="shadow p-4">
          <h1 className="title">Salem-Wallet</h1>
          <div className="button-container">
            <button className="btn btn-success me-4" onClick={this.handleClick}>
              Create Account
            </button>
            <button className="btn btn-secondary" onClick={this.handleRecoverClick}>
              Recover Account
            </button>
          </div>
          {showInput && (
            <div className="mt-5">
              <input
                type="text"
                className="form-control"
                value={seedPhrase}
                onChange={this.handleInputChange}
                onKeyPress={this.handleInputEnter}
                placeholder="Enter Seed Phrase or Private Key"
              />
              <button className="btn btn-success mt-3" onClick={this.handleRecoverSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AccountCreate;
