import { motion } from "framer-motion";
import UserCard from "../ui/user-card";
import { User } from "@/types/user";

interface UserGridProps {
  users: User[];
  onUserClick: (user: User) => void;
}

export default function UserGrid({ users, onUserClick }: UserGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {users.map((user, index) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onUserClick(user)}
          index={index}
        />
      ))}
    </motion.div>
  );
}