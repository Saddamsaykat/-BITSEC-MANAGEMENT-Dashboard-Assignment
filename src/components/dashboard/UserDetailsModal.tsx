import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, Building2, MapPin, Globe, Quote } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { User as UserType } from "@/types/user";

interface UserDetailsModalProps {
  user: UserType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function UserDetailsModal({ user, isOpen, onClose }: UserDetailsModalProps) {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-glass-border/20 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gradient">
              User Profile
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-6"
        >
          {/* Profile Header */}
          <div className="flex items-center space-x-4 p-6 glass-card rounded-2xl">
            <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <User className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
              <p className="text-lg text-muted-foreground">@{user.username}</p>
              <Badge 
                variant="secondary" 
                className="mt-2 bg-primary/10 text-primary border-primary/20"
              >
                User ID: {user.id}
              </Badge>
            </div>
          </div>

          {/* Contact Information */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a 
                    href={`https://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-primary-glow transition-colors"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Address</span>
            </h3>
            <div className="space-y-2">
              <p className="font-medium">
                {user.address.suite} {user.address.street}
              </p>
              <p className="text-muted-foreground">
                {user.address.city}, {user.address.zipcode}
              </p>
              <p className="text-sm text-muted-foreground">
                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>
          </div>

          {/* Company Information */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span>Company</span>
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-xl">{user.company.name}</h4>
              </div>
              <div className="flex items-start space-x-2">
                <Quote className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground italic">
                  "{user.company.catchPhrase}"
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Business Focus</p>
                <p className="font-medium">{user.company.bs}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}