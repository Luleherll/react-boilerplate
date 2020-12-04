import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import appRoutes from './appRoutes';
import history from './History';

const AppRoute = () => {
    return (
        <Router history={history} >
            <Switch>

                {appRoutes.map((r, i) => {
                    return <Route key={r.id} path={r.path} exact={r.exact} component={r.main} />
                })
                }
            </Switch>
        </Router>
    );
};

export {AppRoute}