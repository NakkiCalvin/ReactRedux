import React, {Component} from 'react';
import { connect } from 'react-redux';

class My404Component extends Component {

    render(){
        return (
            <div>
                <h1>404 NOT FOUND</h1>
            </div>
        );
    }
}


export default connect()(My404Component);