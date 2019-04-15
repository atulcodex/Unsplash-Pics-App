import React from 'react'

 class SearchBar extends React.Component {

  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment container" style={{ marginTop: '20px' }}>
        <form className="ui form" onSubmit={ this.onFormSubmit } >
          <div className="field">
            <label className="ui label" style={{ textAlign: 'center' }}>Search Image</label>
            <input value={ this.state.value } type="text" onChange={ (e) => this.setState({ term: e.target.value }) } />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;