import React, { useState } from 'react';
import { Leaf, Upload } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface LogoUploadProps {
  onLogoChange?: (file: File) => void;
  showUpload?: boolean;
}

const LogoUpload: React.FC<LogoUploadProps> = ({ onLogoChange, showUpload = false }) => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  const handleLogoSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCustomLogo(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    onLogoChange?.(file);
  };

  if (showUpload) {
    return (
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16">
          {customLogo ? (
            <img
              src={customLogo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
              <Leaf className="h-8 w-8 text-white" />
            </div>
          )}
        </div>
        <div>
          <ImageUpload
            onImageSelect={handleLogoSelect}
            placeholder="Upload company logo"
            className="w-32 h-16"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full">
        {customLogo ? (
          <img
            src={customLogo}
            alt="Company Logo"
            className="w-full h-full object-contain rounded-full"
          />
        ) : (
          <Leaf className="h-6 w-6 text-white" />
        )}
      </div>
      <div className="hidden sm:block">
        <span className="text-xl font-bold text-gray-900">Johnbabs</span>
        <div className="text-xs text-emerald-600 font-medium">Environmental & Engineering</div>
      </div>
    </div>
  );
};

export default LogoUpload;