import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Home page component
 * @returns {JSX.Element} - Home page
 */
const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with our intuitive task manager.',
      icon: '📝',
      link: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data from external APIs with search and pagination features.',
      icon: '🔗',
      link: '/api-data'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful, responsive interface that works on all devices.',
      icon: '📱',
      link: '#'
    },
    {
      title: 'Dark Mode',
      description: 'Switch between light and dark themes for comfortable viewing.',
      icon: '🌙',
      link: '#'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">PLP Task Manager</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A modern, responsive task management application built with React, Tailwind CSS, 
          and modern web technologies. Manage your tasks efficiently with a beautiful interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            {feature.link !== '#' && (
              <Link to={feature.link}>
                <Button variant="primary" size="sm" className="w-full">
                  Explore
                </Button>
              </Link>
            )}
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Built with Modern Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">React 18</div>
              <p className="text-blue-100">Latest React with hooks</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Tailwind CSS</div>
              <p className="text-blue-100">Utility-first CSS framework</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Vite</div>
              <p className="text-blue-100">Fast build tool and dev server</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Start managing your tasks today with our powerful and intuitive interface.
        </p>
        <Link to="/tasks">
          <Button variant="primary" size="lg">
            Start Managing Tasks
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;
