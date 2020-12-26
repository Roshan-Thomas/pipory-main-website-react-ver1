import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import postlist from './JSON/posts.json'
import Post from './templates/postTemplate/postTemplate'


function App() {
  const fetchedPost = {}
  postlist.forEach((post, i) => {
    fetchedPost.slug = post.slug ? post.slug : 'No slug found'
  })


  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route exact path="/:id" render={props => <Post {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
