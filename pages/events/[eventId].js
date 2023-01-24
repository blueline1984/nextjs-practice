import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById, getAllEvents } from "../../helper/api-utils";

const EventDetailPage = ({ selectedEvent }) => {
  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;

export async function getStaticProps(context) {
  const evnetId = context.params.eventId;
  const selectedEvent = await getEventById(evnetId);
  return {
    props: {
      selectedEvent,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

// async function getData() {
//   const response = await fetch(
//     `https://nextjs-course-5c629-default-rtdb.firebaseio.com/events.json`
//   );

//   const data = response.json();

//   return data;
// }

// export async function getStaticProps(context) {
//   const eventId = context.params.eventId;

//   const data = await getData();
//   let filteredEvent = {};

//   for (const key in data) {
//     if (key === eventId) {
//       filteredEvent = { ...data[key] };
//     }
//   }

//   if (!filteredEvent) {
//     return { notFound: true };
//   }

//   return {
//     props: { filteredEvent },
//   };
// }

// export async function getStaticPaths() {
//   const data = await getData();
//   const ids = [];

//   for (const key in data) {
//     ids.push(key);
//   }

//   const pathsWithParams = ids.map((id) => ({ params: { eventId: id } }));

//   return {
//     paths: pathsWithParams,
//     fallback: true,
//   };
// }
