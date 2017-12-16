import React from 'react';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }

    if (this.props.focus !== nextProps.focus) {
      this.inputField.focus();
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    const { error, warn, whenClicked, name, label, placeholder } = this.props;
    const { value } = this.state;

    return (
      <div className={`input-field ${error ? 'error' : ''} ${warn ? 'warn' : ''}`}>
        {optional ? <div className="optional">Optional</div> : null}
        <div
          className={`input ${error ? 'error' : ''} ${warn ? 'warn' : ''}`}
          onClick={() => whenClicked()}
          >
          <input
            ref={(input) => { this.inputField = input; }}
            type="text"
            name={name}
            onChange={this.handleChange}
            value={value}
            placeholder={placeholder}
            required
            />
          <label htmlFor={name}>{label}:</label>
        </div>
        {error ? <div className="error-msg">{error}</div> : null}
        {warn ? <div className="warning-msg">{warn}</div> : null}
      </div>
    );
  }
}

export default Input;
