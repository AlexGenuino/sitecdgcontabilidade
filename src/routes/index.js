import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Solutions  from '../pages/Solutions';
import SolutionsContabeis from '../pages/SolutionsContabeis';
import Contact from '../pages/Contact';
import NewSolutions from '../pages/NewSolutions';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path ="/" component={Home} exact/>
                <Route path = "/home" component={Home}/>
                <Route path ="/solutions" component={Solutions} exact/>
                <Route path ="/solutions/contabeis" component={SolutionsContabeis} exact/>
                <Route path ="/contact" component={Contact} exact/>
                <Route path ="/newsolutions" component={NewSolutions} exact/>


            </Switch>
        </BrowserRouter>
    );
};

export default Routes;