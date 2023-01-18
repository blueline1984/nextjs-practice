import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { useRouter } from "next/router";

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

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
