import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PlanCards from './components/PlanCards/PlanCards';
import Contact from './components/Contact/Contact';
import Bmi from './components/Bmi/Bmi';
import BmiDetail from './components/Bmi/BmiDetail';
import Payment from './components/Payment/Payment';
import Completion from './components/Payment/Completion';
import Newsletter from './components/Newsletter/Newsletter';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="exercise/:id" element={<ExerciseDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="PlanCards" element={<PlanCards />} />
        <Route path="bmi" element={<Bmi />} />
        <Route path="/bmi-detail" element={<BmiDetail />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/Newsletter" element={<Newsletter />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
