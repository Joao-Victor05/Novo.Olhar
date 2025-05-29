
import React from 'react';
import { Eye } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-8 w-8 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full flex items-center justify-center shadow-sm">
        <Eye className="h-4 w-4 text-rose-600" />
      </div>
      {showText && (
        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Novo Olhar
        </span>
      )}
    </div>
  );
};

export default Logo;
