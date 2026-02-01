import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background bg-mesh flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="glass-strong rounded-3xl p-10 md:p-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-primary flex items-center justify-center"
          >
            <span className="text-5xl font-bold text-primary-foreground">404</span>
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="body-regular mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2" size={18} />
              Go Back
            </Button>
            <Link to="/" className="w-full sm:w-auto">
              <Button className="w-full bg-gradient-primary text-primary-foreground">
                <Home className="mr-2" size={18} />
                Home Page
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
