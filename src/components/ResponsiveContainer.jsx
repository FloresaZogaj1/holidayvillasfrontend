// src/components/ResponsiveContainer.jsx
export default function ResponsiveContainer({ children, className = "", as: Component = "div" }) {
  return (
    <Component className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}