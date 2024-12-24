import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import FeaturedSection from "./Components/FeaturedSection";
import ExploreSection from "./Components/ExploreSection";
import TimelineSection from "./Components/TimelineSection";
import FAQSection from "./Components/FAQSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Labourtype from "./pages/Labourtype";
import TopicDetailPage from "./pages/TopicDetailPage";
import ContactForm from "./pages/ContactForm";
import TopicsListing from "./pages/TopicsListing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/topiclisting" element={<TopicsListing/>} />
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedSection />
              <ExploreSection />
              <TimelineSection />
              <FAQSection />
              <ContactSection />
            </>
          }
        />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/*Sign Route */}
        <Route path="/sign" element={<Sign />} />

       
        

        {/*labourtype Route */}
        <Route path="/labourtype" element={<Labourtype />} />

        {/*electrician Route */}
        <Route path="/electrician" element={<TopicDetailPage />} />

        {/*carpenter Route */}
        <Route path="/carpenter" element={<TopicDetailPage />} />

        {/*door-installation Route */}
        <Route path="/door-installation" element={<TopicDetailPage />} />

        {/*painter Route */}
        <Route path="/painter" element={<TopicDetailPage />} />

        {/*locksmith Route */}
        <Route path="/locksmith" element={<TopicDetailPage />} />

        {/*yoga-tutor Route */}
        <Route path="/yoga-tutor" element={<TopicDetailPage />} />

        {/*dance-tutor Route */}
        <Route path="/dance-tutor" element={<TopicDetailPage />} />

        {/*compose-song Route */}
        <Route path="/compose-song" element={<TopicDetailPage />} />

        {/*online-song Route */}
        <Route path="/online-music" element={<TopicDetailPage />} />

        {/*podcasts Route */}
        <Route path="/podcast" element={<TopicDetailPage />} />

        {/*graducation Route */}
        <Route path="/graduation" element={<TopicDetailPage />} />

        {/*educator Route */}
        <Route path="/educator" element={<TopicDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
