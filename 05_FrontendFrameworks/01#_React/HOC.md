# HOC
A higher-order component is a function that takes a component as an argument and returns a component. 

Suppose you have a page that can only be opened when user is logged in. How will handle this?
One naive answer can be adding a check in componentWillMount() lifecycle function. That seems OK but how about when you have say 10 components that should be opened when user is authenticated. Will you copy paste the logic everywhere?

Thats where HOCs help us.

They wrap our existing component for such logic.

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
 
export default (ChildComponnent) => {
  class RequireAuth extends React.Component {
    render() {
      const { user } = this.props;
 
      switch (user) {
        case false:
          return <Redirect to="/login" />;
 
        case null:
          return <div>Loading...</div>;
 
        default:
          return <ChildComponnent {...this.props} />;
      }
    }
  }
 
  function mapStateToProps({ auth }) {
    return { user: auth.user };
  }
 
  return connect(mapStateToProps)(RequireAuth);
};

```
Home.js 

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderMetaTags from './../helpers/seo';
import RequireAuth from './../components/hocs/requireAuth';
import PostCard from './../components/posts/PostCard';
import { fetchFeed } from './../actions/authActions';
 
class Home extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
 
    };
  }
 
  componentDidMount() {
    this.props.fetchFeed();
  }
 
  render() {
    const { feed } = this.props;
 
    const { } = this.state;
 
    return (
      <div className="c-container u-fx u-margin-t-lg">
        <div className="c-mainContent u-fullFlex">
          {feed.map(post => <PostCard post={post} />) }
        </div>
        <div className="c-sidebar">
 
        </div>
      </div>
    );
  }
}
 
 
function loadData(store) {
  return store.dispatch(fetchFeed());
}
 
function mapStateToProps({ auth }) {
  return { feed: auth.feed };
}
 
export default {
  component: connect(mapStateToProps, { fetchFeed })(RequireAuth(Home)),
  loadData,
};
```
