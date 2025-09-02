import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function CustomPagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className 
}: CustomPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const visiblePages = pages.filter(page => {
    const distance = Math.abs(page - currentPage);
    return distance <= 2 || page === 1 || page === totalPages;
  });

  return (
    <div className={cn("flex items-center justify-center space-x-2", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="glass-card border-glass-border/20"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {visiblePages.map((page, index) => {
        const showEllipsis = index > 0 && visiblePages[index - 1] !== page - 1;
        
        return (
          <div key={page} className="flex items-center space-x-2">
            {showEllipsis && (
              <span className="text-muted-foreground">...</span>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange(page)}
                className={cn(
                  "glass-card border-glass-border/20",
                  currentPage === page && "bg-gradient-primary shadow-glow"
                )}
              >
                {page}
              </Button>
            </motion.div>
          </div>
        );
      })}
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="glass-card border-glass-border/20"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}