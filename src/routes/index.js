import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Solutions  from '../pages/Solutions';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path ="/" component={Home} exact/>
                <Route path = "/home" component={Home}/>
                <Route path ="/solutions" component={Solutions}/>


            </Switch>
        </BrowserRouter>
    );
};

export default Routes;