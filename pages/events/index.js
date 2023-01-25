import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helper/api-utils";

const EventsPage = ({ events }) => {
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Eventsearch onSearch={handleFindEvents} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
