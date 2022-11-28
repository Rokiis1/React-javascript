import React from "react";
import Carousel from "../layouts/Carousel";
import Hero from "../layouts/Hero";
import requests from "../middleware/requests/Requests";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel
        rowID="1"
        title="UpComing"
        fetchURL={requests.requestUpcoming}
      />
      <Carousel rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Carousel
        rowID="3"
        title="Trending"
        fetchURL={requests.requestTrending}
      />
      <Carousel
        rowID="4"
        title="Top Rated"
        fetchURL={requests.requestTopRated}
      />
      <Carousel rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
