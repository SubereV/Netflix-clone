import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
