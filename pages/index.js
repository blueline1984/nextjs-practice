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
    revalidate: 1800,
  };
}
