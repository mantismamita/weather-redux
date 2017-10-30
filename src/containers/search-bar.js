import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SeachBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
        this.setState({term: e.target.value})
    }

    onFormSubmit(e){
        e.preventDefault()
        console.log(e.target)
        this.props.fetchWeather(this.state.term)
        this.setState({term: ''})
    }

    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    className="form-control"
                    placeholder="get a five day forcast inyour favourite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <span className="input-group-btn">
                    <button type="submit"className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

// null (no state)
export default connect(null, mapDispatchToProps)(SeachBar);