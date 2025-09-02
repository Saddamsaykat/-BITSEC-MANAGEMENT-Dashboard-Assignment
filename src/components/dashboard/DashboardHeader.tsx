import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow animate-glow">
          <Users className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
          User Dashboard
        </h1>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Explore and manage users with our beautiful, interactive dashboard. 
        Search, filter, and view detailed user profiles with smooth animations.
      </p>
    </motion.div>
  );
}