import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { useRouter } from "next/router";

const EventsPage = ({ allEvents }) => {
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Eventsearch onSearch={handleFindEvents} />
      <EventList items={allEvents} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const response = await fetch(
    `https://nextjs-course-5c629-default-rtdb.firebaseio.com/events.json`
  );
  const data = await response.json();
  const allEvents = [];

  for (const key in data) {
    allEvents.push({ id: key, ...data[key] });
  }

  return {
    props: {
      allEvents,
    },
  };
}
