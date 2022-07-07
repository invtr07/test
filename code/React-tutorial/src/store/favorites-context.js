import { createContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext({
     favorites: [],
     totalFavorites: 0,
     addFav: (favoriteMeetup)=>{},
     removeFav: (meetupId)=>{},
     itemIsFav: (meetupId)=>{}
});

export function FavoritesContextProvider(props){
     const [userFavorites, setUserFavorites]= useState([]);

     const context = {
          favorites: userFavorites,
          totalFavorites: userFavorites.length,
          addFav: addFavoriteHandler,
          removeFav: removeFavoritehandler,
          itemIsFav: itemIsFavoriteHandler,
     };

     //fucntions for changing our context
     function addFavoriteHandler(favoriteMeetup){
          setUserFavorites(prevUserFavorites =>{
               return prevUserFavorites.concat(favoriteMeetup)
          });
     }

     function removeFavoritehandler(meetupId){
          setUserFavorites(prevUserFavorites =>{
                    return prevUserFavorites.filter(meetup=> meetup.id !== meetupId);
          });
     }

     function itemIsFavoriteHandler(meetupId){
          return userFavorites.some(meetup=> meetup.id ===meetupId);
     }


     return (
          <FavoritesContext.Provider value={context}>
               {props.children}
          </FavoritesContext.Provider>
     )
}

export default FavoritesContext;

