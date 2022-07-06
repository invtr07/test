import MeetupList from "../components/Meetups/MeetupList.js";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://i2-prod.manchestereveningnews.co.uk/incoming/article16687124.ece/ALTERNATES/s615/0_manchester-rain-IMG_0637-MEN.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  }
];

function AllMeetupsPage() {
  fetch('https://react-learning-4f127-default-rtdb.firebaseio.com/meetups.json').then(response=>{
    return response.json();
  })

  return (
  <section>
    <h1>All meetups</h1>
    <MeetupList meetup={DUMMY_DATA} />
  </section>
)}
  
export default AllMeetupsPage;
