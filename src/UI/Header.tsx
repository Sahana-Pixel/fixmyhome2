// UI/Header.tsx
import type { ReactNode } from "react";

interface HeaderProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
  icon: ReactNode; // 💡 allows any icon component
}

const Header = ({ label, title, highlight, description, icon }: HeaderProps) => {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {/* Label pill */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-800/20 backdrop-blur-sm mb-4">
        <span className="mr-2 text-yellow-500 text-lg">{icon}</span>
        <span className="text-xs font-semibold tracking-wide text-yellow-200 uppercase">
          {label}
        </span>
      </div>

      {/* Title with highlight */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title} <span className="text-yellow-500">{highlight}</span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default Header;
