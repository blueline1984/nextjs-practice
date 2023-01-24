import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = ({ filteredEvent }) => {
  return (
    <>
      <EventSummary title={filteredEvent.title} />
      <EventLogistics
        date={filteredEvent.date}
        address={filteredEvent.location}
        image={filteredEvent.image}
        imageAlt={filteredEvent.title}
      />
      <EventContent>
        <p>{filteredEvent.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;

async function getData() {
  const response = await fetch(
    `https://nextjs-course-5c629-default-rtdb.firebaseio.com/events.json`
  );

  const data = response.json();

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;

  const data = await getData();
  let filteredEvent = {};

  for (const key in data) {
    if (key === eventId) {
      filteredEvent = { ...data[key] };
    }
  }

  if (!filteredEvent) {
    return { notFound: true };
  }

  return {
    props: { filteredEvent },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = [];

  for (const key in data) {
    ids.push(key);
  }

  const pathsWithParams = ids.map((id) => ({ params: { eventId: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}
