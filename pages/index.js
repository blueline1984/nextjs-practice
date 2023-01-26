import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-utils";

const MainPage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Next JS Event</title>
        <meta name="description" content="Find a lot of..." />
      </Head>
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
