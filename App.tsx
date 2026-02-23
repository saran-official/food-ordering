import React, { useState, useEffect, Suspense } from 'react';
import { AdminUser } from './types';
import { Loader, ChefHat } from 'lucide-react';

// Lazy Load Components
const CustomerFlow = React.lazy(() => import('./pages/CustomerFlow').then(module => ({ default: module.CustomerFlow })));
const AdminLogin = React.lazy(() => import('./pages/AdminLogin').then(module => ({ default: module.AdminLogin })));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then(module => ({ default: module.AdminDashboard })));

type ViewState = 'splash' | 'customer' | 'admin-login' | 'admin-dashboard';

const WelcomeSplash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center ${isExiting ? 'welcome-exit' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-orange-100 mb-8 animate-reveal">
          <ChefHat className="text-white w-12 h-12" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 animate-tracking uppercase">
          Namma Unavu
        </h1>
        
        <div className="h-px w-12 bg-orange-200 mb-4 animate-reveal"></div>
        
        <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-[10px] animate-slide-up">
          An authentic food delivery
        </p>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center animate-slide-up" style={{ animationDelay: '1.2s' }}>
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-4">Handcrafted Experience</p>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-orange-100"></div>
        </div>
      </div>
    </div>
  );
};

const LoadingScreen = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
    <Loader className="w-10 h-10 text-orange-600 animate-spin mb-4" />
    <p className="text-slate-500 font-medium animate-pulse">Wait a moment...</p>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('splash');
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  const handleAdminLoginSuccess = (user: AdminUser) => {
    setCurrentUser(user);
    setCurrentView('admin-dashboard');
  };

  const handleAdminLogout = () => {
    setCurrentUser(null);
    setCurrentView('customer');
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      {currentView === 'splash' && (
        <WelcomeSplash onComplete={() => setCurrentView('customer')} />
      )}

      {currentView === 'admin-login' && (
        <AdminLogin 
          onLoginSuccess={handleAdminLoginSuccess} 
          onBack={() => setCurrentView('customer')}
        />
      )}

      {currentView === 'admin-dashboard' && currentUser && (
        <AdminDashboard 
          currentUser={currentUser} 
          onExit={handleAdminLogout} 
        />
      )}

      {(currentView === 'customer' || (currentView === 'splash' && false)) && (
        <CustomerFlow 
          onLogout={() => setCurrentView('admin-login')} 
        />
      )}
    </Suspense>
  );
};

export default App;