import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvitationPage from './component/InvitationPage';
import GuestInvitation from './component/GuestInvitation';
import DaftarTamu from './component/DaftarTamu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<InvitationPage />} />
        <Route path="/:name" element={<GuestInvitation />} />
        <Route path="/tamu" element={<DaftarTamu />} />
      </Routes>
    </Router>
  );
}

export default App;
