import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupPage() {

  const history = useHistory();

  function addMeetupHandler(meetupData){
    fetch('https://react-learning-4f127-default-rtdb.firebaseio.com/meetups.json',
    {
      //by default this method is GET, so you must change it for sending data to the server
      method: 'POST', 

      //here you can pass JS objects or array or variable
      body: JSON.stringify(meetupData), 
      headers: {
        'Content-Type':'application.json',
      },
    }).then(()=>{
      history.replace('/');
    });
  }
  return(
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  ) 
}

export default NewMeetupPage;
