import React from 'react';
import CVSidebar from '@/components/CVSidebar';
import MobileNav from '@/components/MobileNav';

interface CVLayoutProps {
  children: React.ReactNode;
}

const CVLayout: React.FC<CVLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <CVSidebar />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav />
      </div>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default CVLayout;
