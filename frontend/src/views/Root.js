import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from 'templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export default function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
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
    </Provider>
  );
}
