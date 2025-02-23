import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <div className="ui container">
                        <Switch>
                            <Route path="/" exact component={StreamList}/>
                            <Route path="/streams/create" exact component={StreamCreate}/>
                            <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                            <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                            <Route path="/streams/:id" exact component={StreamShow}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>

    );
};

export default App;