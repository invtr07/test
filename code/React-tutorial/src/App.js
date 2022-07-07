 import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  //localhost: 3000
  //my-page.com/

  return (
    <Layout>     
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path='/new-meetup' exact={true}>
          <NewMeetupPage />
        </Route>

        <Route path='/favorites' exact={true}>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
