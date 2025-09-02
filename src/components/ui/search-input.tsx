import { Search } from "lucide-react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({ 
  value, 
  onChange, 
  placeholder = "Search users...", 
  className 
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 glass-card border-glass-border/20 bg-glass/50 backdrop-blur-md transition-all duration-300 focus:bg-glass/70 focus:shadow-glow"
      />
    </div>
  );
}