import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

export default function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />
          <Route path="/notes">
            <Route index element={<Notes />} />
            <Route path=":id" element={<DetailsPage />} />
          </Route>
          <Route path="/twitters">
            <Route index element={<Twitters />} />
            <Route path=":id" element={<DetailsPage />} />
          </Route>
          <Route path="/articles">
            <Route index element={<Articles />} />
            <Route path=":id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}
