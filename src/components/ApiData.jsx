import React, { useState, useEffect } from 'react';
import { fetchPosts, fetchUsers, searchPosts } from '../api/jsonPlaceholder';
import Card from './Card';
import Button from './Button';

/**
 * ApiData component for displaying API data with search and pagination
 * @returns {JSX.Element} - ApiData component
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [postsData, usersData] = await Promise.all([
          fetchPosts(currentPage, postsPerPage),
          fetchUsers()
        ]);
        
        setPosts(postsData);
        setUsers(usersData);
      } catch (err) {
        setError(err.message);
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [currentPage, postsPerPage]);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      setError(null);
      const results = await searchPosts(searchQuery);
      setSearchResults(results);
    } catch (err) {
      setError(err.message);
      console.error('Error searching:', err);
    } finally {
      setIsSearching(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  // Get user name by ID
  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const displayData = searchResults.length > 0 ? searchResults : posts;
  const isSearchMode = searchResults.length > 0 || isSearching;

  if (loading && !isSearching) {
    return (
      <Card className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading data...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="text-center py-12">
        <div className="text-red-600 dark:text-red-400">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 className="text-lg font-semibold mb-2">Error Loading Data</h3>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
          <Button 
            variant="primary" 
            onClick={() => window.location.reload()} 
            className="mt-4"
          >
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <Card>
        <h2 className="text-2xl font-bold mb-4">API Data Explorer</h2>
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts by title or content..."
            className="flex-grow input-field"
          />
          <Button type="submit" variant="primary" disabled={isSearching}>
            {isSearching ? 'Searching...' : 'Search'}
          </Button>
          {isSearchMode && (
            <Button type="button" variant="secondary" onClick={clearSearch}>
              Clear
            </Button>
          )}
        </form>
        
        {isSearchMode && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {searchResults.length} result(s) found for "{searchQuery}"
          </p>
        )}
      </Card>

      {/* Data Display */}
      <div className="grid gap-4">
        {displayData.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {isSearchMode ? 'No results found' : 'No posts available'}
            </p>
          </Card>
        ) : (
          displayData.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0">
                  #{post.id}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.body}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  By {getUserName(post.userId)}
                </span>
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Pagination */}
      {!isSearchMode && (
        <Card>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button
                variant="secondary"
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-gray-600 dark:text-gray-400">
                Page {currentPage}
              </span>
              <Button
                variant="secondary"
                onClick={goToNextPage}
                disabled={posts.length < postsPerPage}
              >
                Next
              </Button>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {posts.length} posts
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ApiData;
