import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount () {
        this.props.fetchPosts()
    }
    render() {
        return(
            <div>
                Posts Index
            </div>
        );
    }
}



// Mapping action to props without 'MapDispatchToProps'
export default connect(null, {fetchPosts: fetchPosts}) (PostsIndex);