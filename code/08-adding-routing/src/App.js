import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  //localhost: 3000
  //my-page.com/

  return (
    <div>
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
    </div>
  );
}

export default App;
