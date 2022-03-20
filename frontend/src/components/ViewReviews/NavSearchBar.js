import './NavSearchBar.css'
import React, { Component } from "react";

export default class NavSearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currSearch: this.props.currSearch
      };
    }

    // Send new value to the parent nav prop
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleChange(e.target.searchItem.value);
    }

    //Parent nav prop asks you to update state here
    updateYourState = (e) => {
        const currSearch = e;
        this.setState({
            currSearch,
        });
    };

    onInputchange = (e) => {
        const currSearch = e.target.value;
        this.setState({
            currSearch,
        });
    }

    render () {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input
                    className='input'
                    type='text'
                    id='header-search'
                    placeholder='Search for a room'
                    name='searchItem'
                    value={this.state.currSearch}
                    onChange={this.onInputchange}
                />
            </form>
        );
    }   
}