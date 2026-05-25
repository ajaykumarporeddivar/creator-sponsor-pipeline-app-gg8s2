/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pipeline-primary': '#4f46e5', // Indigo
        'pipeline-accent': '#10b981',  // Emerald Green
        'pipeline-status-pending': '#f59e0b', // Amber
        'pipeline-status-in-progress': '#3b82f6', // Blue
        'pipeline-status-approved': '#10b981', // Emerald Green
        'pipeline-status-completed': '#22c55e', // Green
        'pipeline-status-for-review': '#8b5cf6', // Violet
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}