import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Category from './components/Category/Category';
import List from './components/List/List';
import Order from './components/Order/Order';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Category />
        </Route>
        <Route exact path='/list'>
          <List />
        </Route>
        <Route exact path='/order'>
          <Order />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;