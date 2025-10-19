import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {boolean} props.padding - Whether to add default padding
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = true,
  ...rest 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-[1.02]' : '';
  const paddingClasses = padding ? 'p-6' : '';
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${paddingClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.bool,
};

export default Card;
