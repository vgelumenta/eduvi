import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("pages/Home"));
const NotFound = React.lazy(() => import("pages/NotFound"));
const AllCourses = React.lazy(() => import("pages/AllCourses"));
const AllMentors = React.lazy(() => import("pages/AllMentors"));
const CourseDetails = React.lazy(() => import("pages/CourseDetails"));
const JoinTeacher = React.lazy(() => import("pages/JoinTeacher"));
const MentorDetails = React.lazy(() => import("pages/MentorDetails"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const Shop = React.lazy(() => import("pages/Shop"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/allmentors" element={<AllMentors />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/jointeacher" element={<JoinTeacher />} />
          <Route path="/mentordetails" element={<MentorDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/shop" element={<Shop />} />



        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
