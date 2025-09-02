import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="mb-6"
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Loading Users...
      </h3>
      <p className="text-muted-foreground">
        Fetching user data from the server
      </p>
      
      {/* Loading skeleton cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-primary/20 animate-pulse" />
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-primary/10 rounded animate-pulse" />
                <div className="h-3 bg-primary/10 rounded w-3/4 animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-3 bg-primary/10 rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}