import React from 'react';

interface CVLayoutProps {
  children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-muted/30">
      {children}
    </div>
  );
};

export default CVLayout;
