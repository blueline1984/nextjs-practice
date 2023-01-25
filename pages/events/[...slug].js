import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helper/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = ({ events, hasError, date }) => {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No events for the chosen filter!</p>
      </ErrorAlert>
    );
  }

  const dates = new Date(date.year, date.month - 1);

  return (
    <>
      <ResultsTitle date={dates} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;

// export async function getStaticProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   const response = await fetch(
//     `https://nextjs-course-5c629-default-rtdb.firebaseio.com/events`
//   );
//   const data = response.json();
//   const events = [];
//   for (const key in data) {
//     events.push({ id: key, ...data[key] });
//   }

//   const filteredEvents = events.filter((event) => {
//     const eventDate = new Date(event.date);

//     return (
//       eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth
//     );
//   });

//   return {
//     props: {
//       filteredEvents,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: "test" }],
//     fallback: false,
//   };
// }

export const getServerSideProps = async (context) => {
  getFilteredEvents;
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};
