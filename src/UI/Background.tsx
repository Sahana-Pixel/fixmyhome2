// UI/Background.tsx
import type { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
  className?: string; // optional additional styling
}

const Background = ({ children, className = "" }: BackgroundProps) => {
  return (
    <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Background;
