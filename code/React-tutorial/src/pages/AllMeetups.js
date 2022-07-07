import MeetupList from "../components/Meetups/MeetupList.js";
import {useState, useEffect} from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading]= useState(true);
  const [loadedMeetups,setLoadedMeetups]= useState([]);

  useEffect(()=>{
      setIsLoading(true);
      
      fetch('https://react-learning-4f127-default-rtdb.firebaseio.com/meetups.json').then(response=>{
      return response.json();
    }).then(data=>{
        const meetups = [];

        for(const key in data){
            const meetup ={
              id: key,
              ...data[key],
            };
          meetups.push(meetup);
        }
        
        // console.log(meetups);
        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
  },[]);

  if(isLoading){
    return(
      <div>
        <p>Loading ...</p>
      </div>
    )
  }

  return (
  <section>
    <h1>All meetups</h1>
    {/* {console.log("error!!!!")} */}
    <MeetupList meetups={loadedMeetups} />
  </section>
)}
  
export default AllMeetupsPage;
