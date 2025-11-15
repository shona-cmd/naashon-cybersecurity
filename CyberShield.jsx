import React, { useState } from 'react';
import { Shield, Lock, Bell, Users, BookOpen, Activity, Server, Key, AlertTriangle, CheckCircle, TrendingUp, Eye } from 'lucide-react';

export default function CyberShield() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
    setLoginForm({ email: '', password: '' });
  };

  const Navigation = () => (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold">CYBERSHIELD</span>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'dashboard'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('threat-intel')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'threat-intel'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              Threat Intel
            </button>
            <button
              onClick={() => setCurrentPage('devices')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'devices'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              Devices
            </button>
            <button
              onClick={() => setCurrentPage('training')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'training'
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              Training
            </button>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setCurrentPage('login')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === 'login'
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-800'
                }`}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  const DashboardPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Advanced Cybersecurity Protection System
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Protecting Digital Assets with Military-Grade Security
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-1">99.9%</h3>
              <p className="text-blue-200">Threat Protection</p>
            </div>
            <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-1">AES-256</h3>
              <p className="text-blue-200">Encryption Active</p>
            </div>
            <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <Bell className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-1">0</h3>
              <p className="text-blue-200">Security Alerts</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-16">
            <button
              onClick={() => setCurrentPage('login')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              Secure Login
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="bg-blue-800/50 hover:bg-blue-700/50 border border-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('training')}
              className="bg-blue-800/50 hover:bg-blue-700/50 border border-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Training
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Advanced Security Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-12 h-12" />,
              title: "Identity Protection",
              desc: "Multi-factor authentication with biometric verification and advanced threat detection protocols."
            },
            {
              icon: <Activity className="w-12 h-12" />,
              title: "Network Security",
              desc: "Real-time network monitoring with AI-powered anomaly detection and automated threat response."
            },
            {
              icon: <Lock className="w-12 h-12" />,
              title: "Data Encryption",
              desc: "Military-grade AES-256 encryption with secure key management and zero-knowledge architecture."
            },
            {
              icon: <Shield className="w-12 h-12" />,
              title: "Malware Defense",
              desc: "Advanced malware detection with behavioral analysis and heuristic threat prevention systems."
            },
            {
              icon: <Eye className="w-12 h-12" />,
              title: "24/7 Monitoring",
              desc: "Continuous security monitoring with instant alerting and automated incident response capabilities."
            },
            {
              icon: <CheckCircle className="w-12 h-12" />,
              title: "Compliance Ready",
              desc: "Full compliance with GDPR, SOC 2, ISO 27001, and industry-specific security standards."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:bg-blue-800/40 transition-all">
              <div className="text-cyan-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">System Security Status</h3>
          <div className="flex flex-wrap justify-center gap-6 text-green-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>All security systems operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Encryption protocols active</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Firewall protection enabled</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-900/50 border-t border-blue-500/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-blue-200">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-white">CyberShield Advanced Protection System</span>
          </div>
          <p className="text-sm">Military-Grade Security for Digital Assets</p>
          <p className="text-xs mt-2">© 2024 CyberShield - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );

  const ThreatIntelPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
          <AlertTriangle className="w-10 h-10 text-yellow-400 mr-3" />
          Threat Intelligence Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Threats", value: "0", color: "green" },
            { label: "Blocked Attacks", value: "1,247", color: "blue" },
            { label: "Vulnerabilities", value: "2", color: "yellow" },
            { label: "Risk Score", value: "Low", color: "green" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <p className="text-blue-300 text-sm mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-400`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Threat Activity</h2>
          <div className="space-y-3">
            {[
              { type: "Blocked", threat: "SQL Injection Attempt", time: "2 minutes ago", severity: "High" },
              { type: "Blocked", threat: "Brute Force Attack", time: "15 minutes ago", severity: "Medium" },
              { type: "Detected", threat: "Suspicious Port Scan", time: "1 hour ago", severity: "Low" },
              { type: "Blocked", threat: "Malware Download Attempt", time: "3 hours ago", severity: "Critical" }
            ].map((activity, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">{activity.threat}</p>
                  <p className="text-blue-300 text-sm">{activity.time}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activity.severity === 'Critical' ? 'bg-red-600 text-white' :
                    activity.severity === 'High' ? 'bg-orange-600 text-white' :
                    activity.severity === 'Medium' ? 'bg-yellow-600 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {activity.severity}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                    {activity.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DevicesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
          <Server className="w-10 h-10 text-cyan-400 mr-3" />
          Connected Devices
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Desktop - Windows 11", status: "Protected", ip: "192.168.1.100", lastScan: "5 min ago" },
            { name: "MacBook Pro", status: "Protected", ip: "192.168.1.101", lastScan: "10 min ago" },
            { name: "iPhone 15 Pro", status: "Protected", ip: "192.168.1.102", lastScan: "15 min ago" },
            { name: "iPad Air", status: "Protected", ip: "192.168.1.103", lastScan: "20 min ago" },
            { name: "Samsung Galaxy S24", status: "Protected", ip: "192.168.1.104", lastScan: "25 min ago" },
            { name: "Work Laptop", status: "Protected", ip: "192.168.1.105", lastScan: "30 min ago" }
          ].map((device, idx) => (
            <div key={idx} className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:bg-blue-800/40 transition-all">
              <div className="flex justify-between items-start mb-4">
                <Server className="w-8 h-8 text-cyan-400" />
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white">
                  {device.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
              <p className="text-blue-300 text-sm">IP: {device.ip}</p>
              <p className="text-blue-300 text-sm">Last scan: {device.lastScan}</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
                Scan Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TrainingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
          <BookOpen className="w-10 h-10 text-cyan-400 mr-3" />
          Security Training Center
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Phishing Detection 101",
              duration: "30 minutes",
              level: "Beginner",
              progress: 75,
              description: "Learn to identify and avoid phishing attempts"
            },
            {
              title: "Password Security Best Practices",
              duration: "45 minutes",
              level: "Beginner",
              progress: 100,
              description: "Master the art of creating secure passwords"
            },
            {
              title: "Social Engineering Defense",
              duration: "1 hour",
              level: "Intermediate",
              progress: 40,
              description: "Protect against social engineering attacks"
            },
            {
              title: "Network Security Fundamentals",
              duration: "2 hours",
              level: "Intermediate",
              progress: 0,
              description: "Understanding network security principles"
            },
            {
              title: "Advanced Threat Detection",
              duration: "3 hours",
              level: "Advanced",
              progress: 20,
              description: "Identify sophisticated cyber threats"
            },
            {
              title: "Incident Response Planning",
              duration: "2.5 hours",
              level: "Advanced",
              progress: 0,
              description: "Develop effective incident response strategies"
            }
          ].map((course, idx) => (
            <div key={idx} className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:bg-blue-800/40 transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  course.level === 'Beginner' ? 'bg-green-600' :
                  course.level === 'Intermediate' ? 'bg-yellow-600' :
                  'bg-red-600'
                } text-white`}>
                  {course.level}
                </span>
              </div>
              <p className="text-blue-300 text-sm mb-3">{course.description}</p>
              <p className="text-blue-300 text-sm mb-3">Duration: {course.duration}</p>
              <div className="mb-3">
                <div className="flex justify-between text-sm text-blue-300 mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg font-semibold transition-all">
                {course.progress === 0 ? 'Start Course' : course.progress === 100 ? 'Review' : 'Continue'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Secure Login</h2>
            <p className="text-blue-300">Access your CyberShield dashboard</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-blue-300 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center text-blue-300 text-sm">
                <input type="checkbox" className="mr-2 rounded" />
                Remember me
              </label>
              <button className="text-cyan-400 text-sm hover:text-cyan-300">
                Forgot password?
              </button>
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <Key className="w-5 h-5 mr-2" />
                Sign In Securely
              </div>
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-blue-300 text-sm">
              Don't have an account?{' '}
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Sign up now
              </button>
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-blue-500/30">
            <div className="flex items-center justify-center space-x-2 text-green-400 text-sm">
              <Lock className="w-4 h-4" />
              <span>Secured with AES-256 encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'threat-intel' && <ThreatIntelPage />}
      {currentPage === 'devices' && <DevicesPage />}
      {currentPage === 'training' && <TrainingPage />}
      {currentPage === 'login' && <LoginPage />}
    </div>
  );
}
