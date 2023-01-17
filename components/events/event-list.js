import EventItem from "../event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          data={event.data}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
