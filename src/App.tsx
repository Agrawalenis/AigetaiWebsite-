import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Home from "./pages/Home";
import Career from "./pages/Career";
import "./App.css";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import SoftwareEnquiry from "./pages/SoftwareEnquiry";
import OnlineClasses from "./pages/OnlineClasses";
import Footer from "./components/Footer";
import Explore from "./pages/Explore/index";

// page switch anmination jss code
const defaultTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.35, ease: "easeInOut" as const },
};

const slideXTransition = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.4, ease: "easeInOut" as const },
};

const zoomTransition = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

const reducedMotionTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: "easeInOut" as const },
};

const getTransitionForPath = (pathname: string, reduceMotion: boolean) => {
  if (reduceMotion) {
    return reducedMotionTransition;
  }

  if (pathname === "/login") {
    return zoomTransition;
  }

  if (pathname === "/blog" || pathname === "/classes") {
    return slideXTransition;
  }

  return defaultTransition;
};


function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const pageTransition = getTransitionForPath(location.pathname, !!shouldReduceMotion);

  return (
  
    <div className="app-container">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="page-transition-wrapper"
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/enquiry" element={<SoftwareEnquiry />} />
            <Route path="/classes" element={<OnlineClasses />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

        <Footer/>
    </div>
    
  
  );
}

export default App;
