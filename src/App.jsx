import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import "./App.css";
import ExploreSection from "./Components/ExploreSection";
import TimelineSection from "./Components/TimelineSection";
import FAQSection from "./Components/FAQSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Sign from "./pages/Sign";

import TopicDetailPage from "./pages/TopicDetailPage";
import ContactForm from "./pages/ContactForm";
import TopicsListing from "./pages/TopicsListing";
import PersonList from "./pages/PersonList";
import EducatorList from "./pages/EducatorList";
import StudentList from "./pages/StudentList";

import ScrollRestoration from "./Components/ScrollToTop";
import SearchSection from "./Components/SearchSection";
import SearchResultPage from "./pages/SearchResultPage";

const App = () => {
  return (
    <Router>
      <ScrollRestoration /> {/* Include ScrollToTop */}
      <Navbar />
      <Routes>
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/topiclisting" element={<TopicsListing />} />
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <SearchSection />
              <ExploreSection />
              <TimelineSection />
              <FAQSection />
              <ContactSection />
            </>
          }
        />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Sign Route */}
        <Route path="/sign" element={<Sign />} />

        <Route path="/:serviceType" element={<TopicDetailPage />} />

        {/* compose-song Route */}
        <Route path="/:serviceType/:id" element={<PersonList />} />

        {/* graduation Route */}
        <Route path="/graduation" element={<StudentList />} />

        {/* educator Route */}
        <Route path="/educator" element={<EducatorList />} />

        <Route path="/search/:searchQuery" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
