# Dashboard App

A modern, responsive user management dashboard built with React, TypeScript, and Framer Motion. Features stunning 3D animations, glassmorphism design, and seamless user experience. Maintain clean code and industry best pratics.

## ✨ Features

- **Modern UI/UX**: Glassmorphism design with gradient backgrounds
- **3D Animations**: Interactive Three.js background with floating geometries
- **Smooth Transitions**: Framer Motion animations throughout the app
- **Responsive Design**: Fully responsive on mobile and desktop
- **User Management**: Complete CRUD operations with JSONPlaceholder API
- **Advanced Search**: Filter users by name, email, username, or company
- **Pagination**: Efficient data display with page navigation
- **User Details**: Comprehensive user profiles with posts and albums
- **Performance Optimized**: Lazy loading and optimized rendering

## 🚀 Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics and animations
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **JSONPlaceholder API** - Mock REST API for users data

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)

### Steps

1. **Create React App with TypeScript**
```bash
npx create-react-app dashboard-app --template typescript
cd dashboard-app
```

2. **Install Dependencies**
```bash
npm install framer-motion three @types/three react-router-dom
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Copy Project Files**
Copy all the provided files to their respective locations in your project.

5. **Start Development Server**
```bash
npm run dev
```

The app will open at `http://localhost:8000`



## 🎨 Features Showcase

### Home Page
- Hero section with animated 3D background
- Feature cards with hover animations
- Smooth page transitions
- Interactive call-to-action button

### Users Page
- Grid layout with glassmorphism cards
- Real-time search functionality
- Pagination with smooth transitions
- Loading states and error handling
- Responsive design

### User Details Page
- Comprehensive user profile
- Tabbed navigation (Profile, Posts, Albums)
- Interactive contact information
- Animated content transitions
- Floating action button for quick actions

### 3D Animations
- Interactive floating geometries
- Mouse-following camera movement
- Dynamic lighting effects
- Performance-optimized rendering

## 🚀 Deployment

### Build for Production
```bash
yarn build
```

### Deploy to Vercel
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with automatic builds

### Deploy to Netlify
1. Build the project: `yarn build`
2. Drag and drop `build` folder to Netlify
3. Or connect GitHub repository for automatic deployments

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Performance Optimizations

- **Code Splitting**: React.lazy for route-based splitting
- **Memoization**: React.memo for expensive components
- **Debounced Search**: Optimized search performance
- **Lazy Loading**: Images and content loaded on demand
- **Optimized Animations**: Hardware-accelerated transforms

## 🔧 API Integration

Using JSONPlaceholder REST API:
- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch user details
- `GET /users/:id/posts` - Fetch user posts
- `GET /users/:id/albums` - Fetch user albums

## 🌟 Key Animations

- **Page Transitions**: Smooth enter/exit animations
- **Card Hovers**: 3D transform effects
- **Loading States**: Spinner with dots animation
- **Scroll Animations**: Staggered children animations
- **Micro Interactions**: Button hover and tap feedback

## 🎨 Design System

### Colors
- Primary: Blue to Purple gradient
- Secondary: Pink accents
- Background: Glassmorphism with backdrop blur
- Text: White with opacity variations

### Typography
- Headings: Bold, gradient text effects
- Body: Clean, readable typography
- Monospace: Code and technical details

## 🔄 State Management

Using React Context API:
- User data management
- Search state
- Pagination state
- Loading and error states

## 🧪 Testing

```bash
npm test
```

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📞 Support


## 🏗️ Project Structure

# File Tree: deshboard-app

Generated on: 9/3/2025, 2:00:16 AM
Root path: `g:\assignment\deshboard-app`

```
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 public/
│   ├── 🖼️ favicon.ico
│   ├── 🖼️ placeholder.svg
│   └── 📄 robots.txt
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 3d/
│   │   │   └── 📄 FloatingShapes.tsx
│   │   ├── 📁 dashboard/
│   │   │   ├── 📄 DashboardHeader.tsx
│   │   │   ├── 📄 LoadingState.tsx
│   │   │   ├── 📄 UserDetailsModal.tsx
│   │   │   └── 📄 UserGrid.tsx
│   │   └── 📁 ui/
│   │       ├── 📄 accordion.tsx
│   │       ├── 📄 alert-dialog.tsx
│   │       ├── 📄 alert.tsx
│   │       ├── 📄 aspect-ratio.tsx
│   │       ├── 📄 avatar.tsx
│   │       ├── 📄 badge.tsx
│   │       ├── 📄 breadcrumb.tsx
│   │       ├── 📄 button.tsx
│   │       ├── 📄 calendar.tsx
│   │       ├── 📄 card.tsx
│   │       ├── 📄 carousel.tsx
│   │       ├── 📄 chart.tsx
│   │       ├── 📄 checkbox.tsx
│   │       ├── 📄 collapsible.tsx
│   │       ├── 📄 command.tsx
│   │       ├── 📄 context-menu.tsx
│   │       ├── 📄 custom-pagination.tsx
│   │       ├── 📄 dialog.tsx
│   │       ├── 📄 drawer.tsx
│   │       ├── 📄 dropdown-menu.tsx
│   │       ├── 📄 form.tsx
│   │       ├── 📄 hover-card.tsx
│   │       ├── 📄 input-otp.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 label.tsx
│   │       ├── 📄 menubar.tsx
│   │       ├── 📄 navigation-menu.tsx
│   │       ├── 📄 pagination.tsx
│   │       ├── 📄 popover.tsx
│   │       ├── 📄 progress.tsx
│   │       ├── 📄 radio-group.tsx
│   │       ├── 📄 resizable.tsx
│   │       ├── 📄 scroll-area.tsx
│   │       ├── 📄 search-input.tsx
│   │       ├── 📄 select.tsx
│   │       ├── 📄 separator.tsx
│   │       ├── 📄 sheet.tsx
│   │       ├── 📄 sidebar.tsx
│   │       ├── 📄 skeleton.tsx
│   │       ├── 📄 slider.tsx
│   │       ├── 📄 sonner.tsx
│   │       ├── 📄 switch.tsx
│   │       ├── 📄 table.tsx
│   │       ├── 📄 tabs.tsx
│   │       ├── 📄 textarea.tsx
│   │       ├── 📄 toast.tsx
│   │       ├── 📄 toaster.tsx
│   │       ├── 📄 toggle-group.tsx
│   │       ├── 📄 toggle.tsx
│   │       ├── 📄 tooltip.tsx
│   │       ├── 📄 use-toast.ts
│   │       └── 📄 user-card.tsx
│   ├── 📁 hooks/
│   │   ├── 📄 use-mobile.tsx
│   │   ├── 📄 use-toast.ts
│   │   └── 📄 useUsers.ts
│   ├── 📁 lib/
│   │   └── 📄 utils.ts
│   ├── 📁 pages/
│   │   ├── 📄 Index.tsx
│   │   └── 📄 NotFound.tsx
│   ├── 📁 types/
│   │   └── 📄 user.ts
│   ├── 🎨 App.css
│   ├── 📄 App.tsx
│   ├── 🎨 index.css
│   ├── 📄 main.tsx
│   └── 📄 vite-env.d.ts
├── 🚫 .gitignore
├── 📖 README.md
├── 📄 bun.lockb
├── 📄 components.json
├── 📄 eslint.config.js
├── 🌐 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.ts
├── 📄 tsconfig.app.json
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
└── 📄 vite.config.ts




For support and questions, please create an issue in the GitHub repository.
or email: mdsaddamhossainsaykat@gmail.com