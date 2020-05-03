import React from 'react';

class SearchBar extends React.Component {
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  }

  state = {
    searchText : ''
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui center aligned basic segment">
        <div className="ui left icon action input" style={{ "width" : "700px"}}>
          <i className="search icon" />
          <input type="text" placeholder="Search Image" value= { this.state.searchText } onChange={(e)=> { this.setState({searchText : e.target.value})}}/>
        </div>
        </div>
      </form>
    )
  }
}
export default SearchBar;