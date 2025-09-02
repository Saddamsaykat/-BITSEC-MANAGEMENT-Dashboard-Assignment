import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { User as UserType } from "@/types/user";

interface UserCardProps {
  user: UserType;
  onClick: () => void;
  index: number;
}

export default function UserCard({ user, onClick, index }: UserCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="glass-card border-glass-border/20 hover:shadow-glow transition-all duration-300 hover:bg-glass/70">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  {user.name}
                </h3>
                <p className="text-sm text-muted-foreground">@{user.username}</p>
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20"
            >
              ID: {user.id}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{user.company.name}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{user.address.city}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>{user.website}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}