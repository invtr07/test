import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";

import FavoriteContext from '../../store/favorites-context';
import {useContext} from 'react';

function MeetupItem(props){
     const favoritesCon= useContext(FavoriteContext);

     const itemIsFavorite = favoritesCon.itemIsFav(props.id) 


     function toggleFavoriteStatusHandler(){
           if (itemIsFavorite){
               favoritesCon.removeFav(props.id)
           } else{
               favoritesCon.addFav({
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    image: props.image,
                    address: props.address
               })
           };
     }

     return( 
          <li className={classes.item}>
               <Card>
                    <div className={classes.image}>
                         <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.content}>
                         <h3>{props.title}</h3>
                         <address>{props.address}</address>
                         <p>{props.description} </p>
                    </div>
                    <div className={classes.actions}>
                         <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                    </div>
               </Card>
          </li>
)}

export default MeetupItem;