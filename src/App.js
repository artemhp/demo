import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Category from './components/Category/Category';
import List from './components/List/List';
import Order from './components/Order/Order';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Category />
          </Route>
          <Route exact path='/list/:category'>
            <List />
          </Route>
          <Route exact path='/order/:id'>
            <Order />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}
export default App;
