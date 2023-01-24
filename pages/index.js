import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-utils";

const MainPage = ({ featuredEvents }) => {
  return (
    <div key={featuredEvents.id}>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default MainPage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
}

//내가 작성한 것
// export async function getStaticProps() {
//   const response = await fetch(
//     "https://nextjs-course-5c629-default-rtdb.firebaseio.com/events.json"
//   );
//   const data = await response.json();
//   const featuredEvents = [];

//   for (const key in data) {
//     if (data[key].isFeatured) {
//       featuredEvents.push({ ...data[key], id: key });
//     }
//   }

//   return {
//     props: {
//       featuredEvents,
//     },
//   };
// }
