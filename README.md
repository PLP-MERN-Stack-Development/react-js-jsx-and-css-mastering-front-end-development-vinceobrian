# 🚀 PLP Task Manager - React & Tailwind CSS Application

A modern, responsive task management application built with React, Tailwind CSS, and Vite. This project demonstrates component architecture, state management, hooks usage, and API integration.

## ✨ Features

### 🎯 Core Functionality
- **Task Management**: Create, complete, and delete tasks with persistent storage
- **API Integration**: Fetch and display data from JSONPlaceholder API with search and pagination
- **Theme Switching**: Light and dark mode support with system preference detection
- **Responsive Design**: Mobile-first design that works on all devices

### 🛠️ Technical Features
- **React Hooks**: useState, useEffect, useContext, and custom hooks
- **State Management**: Context API for theme management and localStorage for data persistence
- **Routing**: React Router for navigation between pages
- **API Integration**: Real-time data fetching with loading and error states
- **Custom Hooks**: useLocalStorage and useApi for reusable logic
- **Component Architecture**: Reusable UI components with props and TypeScript-like PropTypes

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Customizable button component
│   ├── Card.jsx        # Card layout component
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── Layout.jsx      # Main layout wrapper
│   ├── TaskManager.jsx # Task management component
│   └── ApiData.jsx     # API data display component
├── pages/              # Page components
│   └── Home.jsx        # Home page
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.js # localStorage hook
│   └── useApi.js       # API data fetching hook
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── api/                # API integration
│   └── jsonPlaceholder.js # JSONPlaceholder API service
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-js-jsx-and-css-mastering-front-end-development-vinceobrian
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Components Overview

### Button Component
- Multiple variants: primary, secondary, danger, success, warning
- Different sizes: sm, md, lg
- Disabled state support
- Customizable with className prop

### Card Component
- Hover effects and animations
- Customizable padding
- Dark mode support

### TaskManager Component
- Add, complete, and delete tasks
- Filter tasks (All, Active, Completed)
- Persistent storage with localStorage
- Real-time task statistics

### ApiData Component
- Fetch data from JSONPlaceholder API
- Search functionality
- Pagination support
- Loading and error states

## 🎯 Key Features Implemented

### ✅ Task 1: Project Setup
- ✅ Vite React application
- ✅ Tailwind CSS configuration
- ✅ Project structure with organized folders
- ✅ React Router setup

### ✅ Task 2: Component Architecture
- ✅ Button component with variants
- ✅ Card component for layouts
- ✅ Navbar with navigation
- ✅ Footer with links
- ✅ Layout component
- ✅ Props for customization

### ✅ Task 3: State Management and Hooks
- ✅ TaskManager with full CRUD operations
- ✅ useState for component state
- ✅ useEffect for side effects
- ✅ useContext for theme management
- ✅ Custom useLocalStorage hook

### ✅ Task 4: API Integration
- ✅ JSONPlaceholder API integration
- ✅ Loading and error states
- ✅ Search functionality
- ✅ Pagination
- ✅ Responsive data display

### ✅ Task 5: Styling with Tailwind CSS
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Theme switcher (light/dark mode)
- ✅ Utility classes for styling
- ✅ Custom animations and transitions

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Dark Mode**: Automatic system preference detection with manual toggle
- **Animations**: Smooth transitions and hover effects
- **Typography**: Clean, readable fonts with proper hierarchy
- **Color Scheme**: Consistent color palette with semantic meaning
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Custom Hooks

### useLocalStorage
```javascript
const [value, setValue] = useLocalStorage('key', initialValue);
```

### useApi
```javascript
const { data, loading, error, refetch } = useApi(url, options);
```

## 🌐 API Integration

The application integrates with JSONPlaceholder API to demonstrate:
- Data fetching with loading states
- Error handling
- Search functionality
- Pagination
- User information display

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The application can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PropTypes** - Runtime type checking
- **JSONPlaceholder** - Mock API for data fetching

## 📚 Learning Outcomes

This project demonstrates:
- Modern React development with hooks
- Component-based architecture
- State management patterns
- API integration best practices
- Responsive design principles
- Custom hook creation
- Context API usage
- Routing implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the PLP MERN Stack Development course.

## 🔗 Live Demo

[Deploy your application and add the URL here]

---

Built with ❤️ using React, Tailwind CSS, and Vite 