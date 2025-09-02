import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useUsers } from "@/hooks/useUsers";
import { User } from "@/types/user";
import FloatingShapes from "@/components/3d/FloatingShapes";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import LoadingState from "@/components/dashboard/LoadingState";
import UserGrid from "@/components/dashboard/UserGrid";
import UserDetailsModal from "@/components/dashboard/UserDetailsModal";
import SearchInput from "@/components/ui/search-input";
import CustomPagination from "@/components/ui/custom-pagination";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Search, Users as UsersIcon } from "lucide-react";

const USERS_PER_PAGE = 6;

const Index = () => {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <FloatingShapes />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="glass-card border-glass-border/20 max-w-md">
            <CardContent className="p-8">
              <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Oops! Something went wrong
              </h2>
              <p className="text-muted-foreground mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-gradient-primary text-white rounded-lg shadow-glow hover:shadow-elegant transition-all duration-300"
              >
                Try Again
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <FloatingShapes />
      
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />

        {loading ? (
          <LoadingState />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Search and Stats */}
            <div className="glass-card rounded-2xl p-6 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1 lg:max-w-md">
                  <SearchInput
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name, email, or username..."
                  />
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <UsersIcon className="h-4 w-4" />
                    <span>{filteredUsers.length} users found</span>
                  </div>
                  {searchTerm && (
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>"{searchTerm}"</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Users Grid */}
            {paginatedUsers.length > 0 ? (
              <UserGrid 
                users={paginatedUsers} 
                onUserClick={setSelectedUser}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Card className="glass-card border-glass-border/20 max-w-md mx-auto">
                  <CardContent className="p-8">
                    <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No users found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or clear the search to see all users.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <CustomPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </motion.div>
            )}
          </motion.div>
        )}

        {/* User Details Modal */}
        <UserDetailsModal
          user={selectedUser}
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      </div>
    </div>
  );
};

export default Index;
