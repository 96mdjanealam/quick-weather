# Quick Weather

A modern, responsive weather application built with React 19, TypeScript, and Tailwind CSS. This application provides real-time weather information with an intuitive user interface and smooth performance.

Visit [https://quick-weather-puce.vercel.app](https://quick-weather-puce.vercel.app) to see the live site.

## 🌟 Features

- **Real-time Weather Data**: Fetches current weather conditions, forecasts, and detailed weather information
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **Fast Performance**: Optimized with React Query for efficient data fetching and caching
- **Type Safety**: Built with TypeScript for enhanced code reliability

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS v4
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Build Tool**: Vite
- **Linting**: ESLint

## 📋 Dependencies

- `react` & `react-dom` - v19.1.1
- `@tailwindcss/vite` & `tailwindcss` - v4.1.13
- `@tanstack/react-query` - v5.90.2
- `lucide-react` - v0.544.0
- `typescript` - v5.8.3
- `vite` - v7.1.7

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/96mdjanealam/quick-weather.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add your weather API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   VITE_BASE_URL=https://api.openweathermap.org/data/2.5
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Visit [http://localhost:5173](http://localhost:5173) to see the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🗂️ Project Structure

```
src/
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
└── assets/        # Static assets (images, icons)
```

## 🎨 UI Components

- **Weather Cards**: Display current weather conditions
- **Forecast Grid**: Show 5-day weather forecast
- **Search Functionality**: Search by city name
- **Responsive Layout**: Adapts to different screen sizes
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages

## 🔧 API Integration

This application integrates with a weather API (such as OpenWeatherMap) to fetch real-time weather data. The API key should be configured in the environment variables.

## 🙏 Acknowledgments

- [React](https://react.dev/) - Modern JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) - Powerful data fetching and state management
- [Lucide](https://lucide.dev/) - Beautiful, pixel-perfect icons
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

**Built with ❤️ using React 19 and TypeScript**