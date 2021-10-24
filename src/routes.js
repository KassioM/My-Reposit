import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Profile from './pages/profile/profile';
import user from './pages/user.jsx';

const Routes = () => {
    return (
        <Router>
            <Route path='/' component={user} exact />
            <Route path='/:user_login' component={Profile} exact />    
        </Router>
    )
}

export default Routes;
