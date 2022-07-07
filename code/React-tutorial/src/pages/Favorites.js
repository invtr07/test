import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/Meetups/MeetupList';

function FavoritesPage() {
  const favoritesCtx= useContext(FavoritesContext);

  let content;
  
  if(favoritesCtx.totalFavorites==0){
    content = <p>You got no favorites yet. Start adding some?</p>
  }
  else{
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return <section>
    <h1>My Favorties</h1>
    {content}
  </section>;
}

export default FavoritesPage;