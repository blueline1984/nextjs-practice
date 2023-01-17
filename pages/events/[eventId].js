import React from "react";
import { useRouter } from "next/router";
import events from "../../data/data";

const EventDetailPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>{`The Event ${router.query.eventId} Detail Page`}</h1>
      {/* {events.map((event) => {
        return (<></>);
      })} */}
    </>
  );
};

export default EventDetailPage;
