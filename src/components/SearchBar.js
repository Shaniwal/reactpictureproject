import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <br />
          <div className="ui icon input focus field">
            <input
              type="text"
              placeholder="Search"
              onChange={this.onInputChange}
              value={this.state.input}
            />
            <i className="circular search link icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
