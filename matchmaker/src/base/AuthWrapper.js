import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { checkPath } from '../route';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class AuthWrapper extends Component {

    constructor(props) {
        super(props);
    }

    checkPermission() {

        let needAuth = checkPath(this.props.location.pathname);

        if(needAuth && !this.props.user) {

            this.props.history.push({
                pathname: '/login',
                state   : { redirectUrl: this.props.location.pathname }
            });

            return false;
        }

        return true;
    }

    render() {

        if(!this.checkPermission()) {
            return '';
        }

        const {children} = this.props;

        return (
            <React.Fragment>
                { children }
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({ authReducers })
{
    return {
        user: authReducers.user,
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthWrapper));
