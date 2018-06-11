import React from 'react';
import { Route, IndexRoute } from 'react-router';
import  App from './src/components/App';
import HomePage from './src/components/home/HomePage';
import AboutPage from './src/components/about/AboutPage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage} />
    </Route>
);
