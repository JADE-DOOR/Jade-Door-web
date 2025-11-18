const React = require('react');

const Link = ({ children }) => React.createElement('a', null, children);
const BrowserRouter = ({ children }) => React.createElement(React.Fragment, null, children);
const Routes = ({ children }) => React.createElement(React.Fragment, null, children);
const Route = ({ element }) => element || null;

module.exports = {
  Link,
  BrowserRouter,
  Routes,
  Route,
};
