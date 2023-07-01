import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/HomePage/MainPage';
import DetailMainPage from '../pages/DetailsPage/DetailMainPage';
import EpisodeDetailMainPage from '../pages/EpisodeDetail/EpisodeDetailMainPage';
import Header from '../layouts/Header';
import ErrorPage from '../pages/ErrorPage.js/ErrorPage';
export default function RouterMain() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="/podcast/:podcastId" element={<DetailMainPage />} />
        <Route
          exact
          path="/podcast/episode/:episodeId"
          element={<EpisodeDetailMainPage />}
        />
        <Route exact path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
