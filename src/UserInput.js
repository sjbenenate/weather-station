import React, { Component } from "react";

/* props: updateCity function to change state in parent */
class UserInput extends Component {
  handleChange = event => {
    this.props.updateCity(event.target.value);
  };

  render() {
    return (
      <form className="city-form">
        <select onChange={this.handleChange}>
          <option value="Portand, OR">Portland, OR</option>
          <option value="Seattle, WA">Seattle, WA</option>
          <option value="Los Angeles, CA">Los Angels, CA</option>
          <option value="Austin, TX">Austin, TX</option>
          <option value="Denver, CO">Denver, CO</option>
        </select>
      </form>
    );
  }
}

export default UserInput;
