import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Home from './pages/Home';
import PostCreate from './pages/Posts/PostCreate';
import PostEdit from './pages/Posts/PostEdit';
import PostList from './pages/Posts/PostList';
import PostListReactive from './pages/Posts/PostListReactive';

import Register from './pages/Users/Register';
import Login from './pages/Users/Login';
import Nickname from './pages/Users/Nickname';
import Nickname2 from './pages/Users/Nickname2';
import Messages from './pages/Messages';
import Message from './pages/Message';

export default () =>
    <App>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/reactive" component={PostListReactive} />
        <Route exact path="/posts/create" component={PostCreate} />
        <Route exact path="/posts/edit/:_id" component={PostEdit} />


        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/nickname" component={Nickname} />
        <Route exact path="/messages" component={Messages}/>
        <Route exact path="/message" component={Message} />
        <Route exact path="/exemplu" component={Nickname2} />
    </App>