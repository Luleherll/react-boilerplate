import React, {Suspense} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppRoute } from './settings/routes';
import { connect } from 'react-redux';

const App =(props)=> {
  return (
    <>
    <CssBaseline />
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoute />
    </Suspense>
    </>
  );
}

const mapPropsToState = ({authState}) => {
	return ({})
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapPropsToState, mapDispatchToProps,)(App);
