import { useRouter } from "next/router";
import Link from "next/link";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <h1>The Events Page</h1>
      <ul>
        {events.map((event) => {
          return (
            <li key={event.id}>
              <Link
                href={{
                  pathname: "/events/[eventId]",
                  query: {
                    eventId: event.id,
                  },
                }}
              >
                {event.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventsPage;
