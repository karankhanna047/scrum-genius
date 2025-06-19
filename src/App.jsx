import React, { useState, useEffect } from 'react';
import { Calendar, Zap, Brain, Users, TrendingUp, AlertCircle, CheckCircle, Clock, BarChart3, Sparkles, MessageSquare, Target, Lightbulb, Activity, ChevronRight, Menu, X, Home, FileText, Bot, Settings, LogOut, Star, ArrowUp, ArrowDown, BookOpen, Layout, ChevronDown } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (currentView === 'dashboard') {
      const timer = setTimeout(() => setShowNotification(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  // Logo Component
  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
          <Brain className="w-6 h-6 text-black" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-white">ScrumGenius</h1>
        <p className="text-xs text-gray-400">AI-Powered Agile</p>
      </div>
    </div>
  );

  // Top Navigation Bar
  const TopNavigation = () => (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Logo />
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'home' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
              currentView === 'dashboard' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>Dashboard Demo</span>
          </button>
          <button
            onClick={() => setCurrentView('documentation')}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
              currentView === 'documentation' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Documentation</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Home Page Component (Presentation)
  const HomePage = () => {
    const slides = [
      // Slide 1: Title
      <div key="1" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-12">
            <div className="relative">
              <div className="w-20 h-20 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Brain className="w-12 h-12 text-black" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-black text-white">ScrumGenius</h1>
              <p className="text-gray-400 text-lg">AI-Powered Agile Management</p>
            </div>
          </div>
          
          <p className="text-2xl text-gray-400 mb-12">Revolutionizing Scrum with Artificial Intelligence</p>
          
          <div className="flex justify-center gap-16 mb-12">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2">93%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2">$480K</div>
              <div className="text-gray-400">Annual ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400 mb-2">4 Mo</div>
              <div className="text-gray-400">Payback Period</div>
            </div>
          </div>
          
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
          >
            Transform Your Agile Process
          </button>
        </div>
      </div>,

      // Slide 2: Problem Statement
      <div key="2" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">The Challenge</h2>
          <p className="text-xl text-gray-400 mb-12">Manual Scrum processes are holding teams back</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-white mb-2">Time Drain</h3>
              <p className="text-gray-400">Teams spend 30% of their time on administrative tasks instead of building products</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Poor Visibility</h3>
              <p className="text-gray-400">Project status updates are delayed, making it hard to identify blockers quickly</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Inconsistent Planning</h3>
              <p className="text-gray-400">Story pointing varies by team member, making velocity tracking unreliable</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-2">Manual Updates</h3>
              <p className="text-gray-400">Board updates are error-prone and often forgotten, leading to inaccurate tracking</p>
            </div>
          </div>
        </div>
      </div>,

      // Slide 3: Solution Overview
      <div key="3" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Introducing ScrumGenius AI</h2>
          <p className="text-xl text-gray-400 mb-12">Your intelligent Scrum automation platform</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="bg-gray-800 border-2 border-yellow-400 rounded-xl p-6 relative">
              <div className="text-3xl mb-2">📝</div>
              <h4 className="text-lg font-bold text-white mb-2">Natural Input</h4>
              <p className="text-gray-400 text-sm">Teams provide updates in plain language</p>
              <ChevronRight className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-8 h-8 text-yellow-400 hidden md:block" />
            </div>
            <div className="bg-gray-800 border-2 border-yellow-400 rounded-xl p-6 relative">
              <div className="text-3xl mb-2">🧠</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Processing</h4>
              <p className="text-gray-400 text-sm">Advanced NLP extracts tasks & insights</p>
              <ChevronRight className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-8 h-8 text-yellow-400 hidden md:block" />
            </div>
            <div className="bg-gray-800 border-2 border-yellow-400 rounded-xl p-6">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="text-lg font-bold text-white mb-2">Automated Actions</h4>
              <p className="text-gray-400 text-sm">Boards update, tasks created, teams notified</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5 min</div>
              <div className="text-gray-400">Daily Standups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2 min</div>
              <div className="text-gray-400">Board Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
          </div>
        </div>
      </div>,

      // Slide 4: Key Features
      <div key="4" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400 mb-12">Everything you need for AI-powered Scrum</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all text-left">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Epic Generator</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Transform requirements into epics</li>
                <li>• Auto-generate user stories</li>
                <li>• Consistent story pointing</li>
                <li>• Dependency mapping</li>
              </ul>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all text-left">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Updates</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Natural language processing</li>
                <li>• Automatic board updates</li>
                <li>• Blocker detection</li>
                <li>• Task creation</li>
              </ul>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all text-left">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Analytics</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Sprint predictions</li>
                <li>• Risk analysis</li>
                <li>• Team insights</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all text-left">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Assistant</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• 24/7 Scrum guidance</li>
                <li>• Best practice suggestions</li>
                <li>• Instant answers</li>
                <li>• Team coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>,

      // Slide 5: Architecture
      <div key="5" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Enterprise Architecture</h2>
          <p className="text-xl text-gray-400 mb-12">Secure, scalable, and integrated</p>
          
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Frontend Layer</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">React</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">TypeScript</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Tailwind CSS</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">AI Services</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Azure OpenAI</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">GPT-4</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Custom ML Models</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Backend Infrastructure</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">.NET 8</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Azure Functions</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Cosmos DB</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Integrations</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Jira API</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Azure DevOps</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Microsoft Teams</span>
                  <span className="bg-gray-900 border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold">Azure AD</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 mt-8">🔒 Enterprise-grade security with Azure AD authentication and role-based access control</p>
          </div>
        </div>
      </div>,

      // Slide 6: ROI Analysis
      <div key="6" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Return on Investment</h2>
          <p className="text-xl text-gray-400 mb-12">For a 50-person engineering team</p>
          
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-8 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Time saved per person per month</span>
                <span className="text-yellow-400 font-bold">8 hours</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Total hours saved monthly</span>
                <span className="text-yellow-400 font-bold">400 hours</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Value at $100/hour</span>
                <span className="text-yellow-400 font-bold">$40,000/month</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Annual value</span>
                <span className="text-yellow-400 font-bold">$480,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Implementation cost</span>
                <span className="text-red-400 font-bold">-$150,000</span>
              </div>
              <div className="flex justify-between items-center py-6 text-xl">
                <span className="text-white font-bold">First Year ROI</span>
                <span className="text-yellow-400 font-bold text-3xl">320%</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-gray-400">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">😊</div>
              <div className="text-gray-400">Happier Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-gray-400">Better Insights</div>
            </div>
          </div>
        </div>
      </div>,

      // Slide 7: Call to Action
      <div key="7" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-12">
            <div className="w-20 h-20 bg-yellow-400 rounded-xl flex items-center justify-center">
              <Brain className="w-12 h-12 text-black" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Ready to Transform Your Agile Process?</h2>
          <p className="text-xl text-gray-400 mb-12">Join the AI-powered Scrum revolution</p>
          
          <div className="flex justify-center gap-16 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20</div>
              <div className="text-gray-400">Weeks to Launch</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-gray-400">Month Payback</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-gray-400">Possibilities</div>
            </div>
          </div>
          
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
          >
            Schedule a Demo
          </button>
          
          <p className="text-gray-400 mt-8">
            Contact us: hello@scrumgenius.ai | 1-800-SCRUM-AI
          </p>
        </div>
      </div>
    ];

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slides.length]);

    return (
      <div className="pt-16">
        {slides[currentSlide]}
        
        {/* Slide Navigation */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5 transform rotate-180" />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Slide Counter */}
        <div className="fixed bottom-8 right-8 text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    );
  };

  // Documentation Page
  const DocumentationPage = () => (
    <div className="pt-20 pb-12 px-6 max-w-6xl mx-auto">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">AI-Powered Scrum Automation System</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">Comprehensive Implementation Plan & Design Document</h2>
        
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
          <p className="text-gray-300 mb-4">
            This document outlines a comprehensive AI-powered solution to automate Scrum processes, board management, and team coordination. 
            The system leverages Generative AI to transform how teams manage sprints, update boards, and communicate progress, 
            resulting in significant time savings and improved project visibility.
          </p>
          
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Key Capabilities</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Automated Epic & Story Generation</strong> from business requirements</li>
            <li><strong>Intelligent Board Updates</strong> from daily team summaries</li>
            <li><strong>AI-Powered Dashboards</strong> for PM/Scrum Master insights</li>
            <li><strong>Automated Teams Integration</strong> for seamless communication</li>
            <li><strong>Predictive Analytics</strong> for sprint planning and risk management</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Solution Architecture</h2>
          
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">1.1 High-Level Architecture</h3>
          <div className="bg-gray-900 rounded-lg p-6 mb-6 font-mono text-sm text-gray-300">
            <pre>{`┌─────────────────────────────────────────────────────────────────┐
│                        Frontend Layer                            │
├─────────────────────┬───────────────────┬───────────────────────┤
│   PM Dashboard      │  Scrum Master     │   Team Member         │
│   (React/Angular)   │  Dashboard        │   Interface           │
└────────┬────────────┴────────┬──────────┴────────┬──────────────┘
         │                     │                   │
┌────────▼─────────────────────▼───────────────────▼──────────────┐
│                     API Gateway (Azure API Management)           │
│                     Authentication: Azure AAD/SPN                │
└────────┬─────────────────────────────────────────────────────────┘
         │
┌────────▼─────────────────────────────────────────────────────────┐
│                    Core AI Services Layer                        │
├─────────────────┬────────────────┬────────────────┬─────────────┤
│  Epic/Story     │  Board Update  │  Analytics &   │  NLP        │
│  Generator      │  Engine        │  Insights      │  Processor  │
└─────────────────┴────────────────┴────────────────┴─────────────┘`}</pre>
          </div>
          
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">1.2 Technology Stack</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>AI/ML:</strong> Azure OpenAI Service (GPT-4), Azure Cognitive Services</li>
            <li><strong>Backend:</strong> .NET 8.0 / Python FastAPI</li>
            <li><strong>Frontend:</strong> React/Angular with TypeScript</li>
            <li><strong>Integration:</strong> Azure Logic Apps, Azure Functions</li>
            <li><strong>Database:</strong> Azure Cosmos DB, Azure SQL</li>
            <li><strong>Authentication:</strong> Azure AD, Service Principal Tokens</li>
            <li><strong>Monitoring:</strong> Application Insights, Azure Monitor</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Core Features & Use Cases</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">2.1 Automated Epic & Story Generation</h3>
              <p className="text-gray-300 mb-3"><strong>Functionality:</strong></p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>AI analyzes business requirements documents</li>
                <li>Generates properly structured epics following company standards</li>
                <li>Creates technical and business stories with acceptance criteria</li>
                <li>Assigns story points based on historical data and complexity analysis</li>
              </ul>
              
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <pre className="text-gray-300">{`class EpicGenerator:
    def __init__(self, azure_openai_client):
        self.ai_client = azure_openai_client
        self.company_templates = load_company_templates()
    
    def generate_epic_from_requirements(self, requirements_doc):
        # Extract key business objectives
        objectives = self.extract_objectives(requirements_doc)
        
        # Generate epic structure
        epic = self.ai_client.generate(epic_prompt)
        stories = self.decompose_epic_to_stories(epic)
        return epic, stories`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">2.2 Intelligent Daily Update Processing</h3>
              <p className="text-gray-300 mb-3"><strong>Sample Update Flow:</strong></p>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-gray-400 mb-2">Team Member Input:</p>
                <p className="text-gray-300 italic mb-4">"Today I completed the API integration for user authentication. 
                Ran into some issues with token refresh that I'll need to investigate tomorrow. 
                Also started reviewing the database schema changes."</p>
                
                <p className="text-gray-400 mb-2">AI Processing:</p>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  <li>Identifies ticket: USER-AUTH-101</li>
                  <li>Updates status: In Progress → Testing</li>
                  <li>Adds comment with details</li>
                  <li>Creates subtask: "Investigate token refresh issues"</li>
                  <li>Updates time tracking</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Implementation Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Phase 1: Foundation</h3>
              <p className="text-sm text-gray-400 mb-2">Weeks 1-4</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Set up Azure infrastructure</li>
                <li>• Configure Azure AD authentication</li>
                <li>• Establish API connections</li>
                <li>• Create base data models</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Phase 2: Core AI Services</h3>
              <p className="text-sm text-gray-400 mb-2">Weeks 5-8</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Implement Epic/Story generator</li>
                <li>• Build NLP processor</li>
                <li>• Create board update engine</li>
                <li>• Develop story pointing algorithm</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Phase 3: Integration</h3>
              <p className="text-sm text-gray-400 mb-2">Weeks 9-12</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Teams channel integration</li>
                <li>• Board synchronization</li>
                <li>• Database setup</li>
                <li>• API gateway configuration</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Phase 4: Analytics</h3>
              <p className="text-sm text-gray-400 mb-2">Weeks 13-16</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• PM dashboard development</li>
                <li>• Scrum Master insights</li>
                <li>• Predictive analytics</li>
                <li>• Reporting framework</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Phase 5: Launch</h3>
              <p className="text-sm text-gray-400 mb-2">Weeks 17-20</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• UAT with pilot teams</li>
                <li>• AI model fine-tuning</li>
                <li>• Performance optimization</li>
                <li>• Security audit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Value Drivers & ROI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Time Savings</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Daily Standups:</strong> 15 min → 5 min (67% reduction)</li>
                <li><strong>Board Updates:</strong> 30 min/day → 2 min (93% reduction)</li>
                <li><strong>Sprint Planning:</strong> 4 hours → 2 hours (50% reduction)</li>
                <li><strong>Status Reporting:</strong> 2 hours/week → 15 min (87% reduction)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Financial Impact</h3>
              <p className="text-gray-300 mb-2">For a 50-person engineering organization:</p>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Time Saved:</strong> ~400 hours/month</li>
                <li><strong>Productivity Gain:</strong> $40,000/month (@$100/hour)</li>
                <li><strong>Annual ROI:</strong> $480,000</li>
                <li><strong>Implementation Cost:</strong> ~$150,000</li>
                <li><strong>Payback Period:</strong> 4 months</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Success Metrics & KPIs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Adoption Metrics</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• User adoption rate (target: 90%)</li>
                <li>• Daily active users</li>
                <li>• Feature utilization rates</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Efficiency Metrics</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Average time to update boards</li>
                <li>• Sprint planning duration</li>
                <li>• Story estimation accuracy</li>
                <li>• Sprint completion rates</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quality Metrics</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Story template compliance</li>
                <li>• Estimation accuracy</li>
                <li>• Blocker resolution time</li>
                <li>• Sprint goal achievement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Navigation Component
  const DashboardNavigation = () => (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 transition-all duration-300 z-40 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4">
        <nav className="space-y-2">
          {[
            { id: 'dashboard', icon: Home, label: 'Dashboard' },
            { id: 'epics', icon: FileText, label: 'Epic Generator' },
            { id: 'daily', icon: MessageSquare, label: 'Daily Updates' },
            { id: 'analytics', icon: BarChart3, label: 'Analytics' },
            { id: 'ai-assistant', icon: Bot, label: 'AI Assistant' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === item.id ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white">
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  // Notification Component
  const Notification = () => (
    <div className={`fixed top-20 right-4 bg-yellow-400 text-black px-6 py-4 rounded-lg shadow-xl transition-all transform ${showNotification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} z-50`}>
      <div className="flex items-center space-x-3">
        <Sparkles className="w-5 h-5" />
        <div>
          <p className="font-semibold">AI Update Complete!</p>
          <p className="text-sm">3 stories updated, 2 blockers identified</p>
        </div>
        <button onClick={() => setShowNotification(false)} className="ml-4">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // Dashboard Page
  const DashboardPage = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Sprint Dashboard</h2>
          <p className="text-gray-400">AI-powered insights for Sprint 24</p>
        </div>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center space-x-2">
          <Zap className="w-5 h-5" />
          <span>Generate Sprint Report</span>
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Sprint Velocity', value: '47', change: '+12%', icon: TrendingUp, positive: true },
          { label: 'Stories Completed', value: '23/30', change: '77%', icon: CheckCircle, positive: true },
          { label: 'Active Blockers', value: '3', change: '-2', icon: AlertCircle, positive: false },
          { label: 'Team Happiness', value: '8.5/10', change: '+0.5', icon: Users, positive: true }
        ].map((metric, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="w-8 h-8 text-yellow-400" />
              <span className={`text-sm font-medium flex items-center ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                {metric.positive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                {metric.change}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Brain className="w-6 h-6 text-yellow-400 mr-2" />
            AI Sprint Insights
          </h3>
          <span className="text-sm text-gray-400">Updated 2 min ago</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="text-yellow-400 font-semibold flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Sprint Goal Health
            </h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Completion Probability</span>
                <span className="text-white font-bold">78%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Based on current velocity and remaining work</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-yellow-400 font-semibold flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Risk Analysis
            </h4>
            <div className="space-y-2">
              {[
                { risk: 'Backend API delays', impact: 'High', mitigation: 'Add 1 developer' },
                { risk: 'Testing bottleneck', impact: 'Medium', mitigation: 'Parallelize tests' }
              ].map((risk, idx) => (
                <div key={idx} className="bg-gray-900 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium text-sm">{risk.risk}</span>
                    <span className={`text-xs px-2 py-1 rounded ${risk.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {risk.impact}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">Suggested: {risk.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-yellow-400 font-semibold flex items-center">
              <Lightbulb className="w-5 h-5 mr-2" />
              AI Recommendations
            </h4>
            <div className="bg-gray-900 rounded-lg p-4 space-y-3">
              <div className="flex items-start space-x-2">
                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">Consider moving USER-445 to next sprint to maintain quality</p>
              </div>
              <div className="flex items-start space-x-2">
                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">Schedule mob programming for complex integration task</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sprint Progress */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Sprint Burndown</h3>
        <div className="h-64 flex items-end justify-between">
          {[100, 92, 85, 78, 71, 65, 58, 52, 45, 40].map((height, idx) => (
            <div key={idx} className="flex-1 mx-1">
              <div className="bg-yellow-400 rounded-t" style={{height: `${height}%`}}></div>
              <p className="text-xs text-gray-400 text-center mt-2">D{idx + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Epic Generator Page
  const EpicGeneratorPage = () => {
    const [generating, setGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
      setGenerating(true);
      setTimeout(() => {
        setGenerating(false);
        setGenerated(true);
      }, 3000);
    };

    return (
      <div className="space-y-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">AI Epic Generator</h2>
          <p className="text-gray-400">Transform business requirements into structured epics and stories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Business Requirements</h3>
            <textarea
              className="w-full h-64 bg-gray-900 text-white rounded-lg p-4 border border-gray-700 focus:border-yellow-400 focus:outline-none"
              placeholder="Paste your business requirements here..."
              defaultValue="We need a customer portal that allows users to:
- View their order history
- Track shipments in real-time
- Download invoices
- Contact support through chat
- Manage their profile and preferences"
            />
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="mt-4 w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {generating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  <span>AI is analyzing...</span>
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5" />
                  <span>Generate Epic & Stories</span>
                </>
              )}
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Generated Structure</h3>
            {generated ? (
              <div className="space-y-4">
                {/* Epic */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-yellow-400 font-semibold">Epic: Customer Self-Service Portal</h4>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">13 Points</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">Enable customers to manage their accounts, orders, and support needs through a comprehensive self-service portal</p>
                  
                  {/* Stories */}
                  <div className="space-y-2 mt-4">
                    {[
                      { title: 'User Authentication & Profile Management', points: 3, type: 'Technical' },
                      { title: 'Order History Display', points: 2, type: 'Feature' },
                      { title: 'Real-time Shipment Tracking Integration', points: 5, type: 'Technical' },
                      { title: 'Invoice Download System', points: 2, type: 'Feature' },
                      { title: 'Live Chat Support Widget', points: 3, type: 'Feature' }
                    ].map((story, idx) => (
                      <div key={idx} className="bg-gray-800 rounded p-3 flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">{story.title}</p>
                          <span className={`text-xs ${story.type === 'Technical' ? 'text-blue-400' : 'text-green-400'}`}>
                            {story.type} Story
                          </span>
                        </div>
                        <span className="text-yellow-400 font-bold">{story.points} pts</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                  Export to Jira/Azure DevOps
                </button>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Generated epics and stories will appear here</p>
              </div>
            )}
          </div>
        </div>

        {/* AI Analysis */}
        {generated && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 text-yellow-400 mr-2" />
              AI Analysis & Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Dependencies Identified</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Payment gateway integration</li>
                  <li>• Shipping provider APIs</li>
                  <li>• Customer database migration</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Suggested Team</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 2 Backend developers</li>
                  <li>• 1 Frontend developer</li>
                  <li>• 1 UX designer</li>
                  <li>• 1 QA engineer</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Timeline Estimate</h4>
                <p className="text-2xl font-bold text-white mb-1">6-8 weeks</p>
                <p className="text-sm text-gray-400">Based on team velocity and complexity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Daily Updates Page
  const DailyUpdatesPage = () => {
    const [updateText, setUpdateText] = useState('');
    const [processing, setProcessing] = useState(false);
    const [processed, setProcessed] = useState(false);

    const handleProcess = () => {
      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setProcessed(true);
      }, 2000);
    };

    return (
      <div className="space-y-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Daily Stand-up Updates</h2>
          <p className="text-gray-400">Natural language updates automatically processed by AI</p>
        </div>

        {/* Update Input */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Your Daily Update</h3>
          <textarea
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            className="w-full h-32 bg-gray-900 text-white rounded-lg p-4 border border-gray-700 focus:border-yellow-400 focus:outline-none mb-4"
            placeholder="What did you work on today? Any blockers?"
            defaultValue="Completed the API integration for user authentication. The token refresh logic is working smoothly now. Started working on the profile management endpoints but got blocked on the database schema changes - need to sync with the backend team."
          />
          <button
            onClick={handleProcess}
            disabled={processing}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            {processing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                <span>Submit Update</span>
              </>
            )}
          </button>
        </div>

        {/* AI Processing Results */}
        {processed && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 text-yellow-400 mr-2" />
              AI Processing Results
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-semibold mb-2">Tasks Identified</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">USER-AUTH-101: API Integration</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Completed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">USER-PROFILE-102: Profile Management</span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">In Progress</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">Blocker Detected</h4>
                  <p className="text-sm text-gray-300 mb-2">Database schema changes dependency</p>
                  <p className="text-xs text-gray-400">Auto-assigned to: Backend Team Lead</p>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Board Updates</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Moved USER-AUTH-101 to Done
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                    Updated USER-PROFILE-102 progress to 30%
                  </div>
                  <div className="flex items-center text-gray-300">
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                    Created blocker BLK-234
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MessageSquare className="w-4 h-4 text-blue-400 mr-2" />
                    Posted update to #dev-team channel
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Updates Feed */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Team Updates Feed</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah Chen', time: '10 min ago', update: 'Completed frontend tests for checkout flow', status: 'success' },
              { name: 'Mike Johnson', time: '45 min ago', update: 'Working on payment integration, might need help with webhooks', status: 'warning' },
              { name: 'Emily Davis', time: '2 hours ago', update: 'Deployed user service to staging, ready for QA', status: 'success' }
            ].map((update, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{update.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{update.name}</p>
                      <p className="text-xs text-gray-400">{update.time}</p>
                    </div>
                  </div>
                  {update.status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                <p className="text-sm text-gray-300">{update.update}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Analytics Page
  const AnalyticsPage = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Team Analytics</h2>
        <p className="text-gray-400">AI-powered insights and performance metrics</p>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Velocity Trend</h3>
          <div className="h-64 flex items-end justify-between">
            {[32, 35, 38, 42, 39, 45, 47, 44, 48, 52].map((height, idx) => (
              <div key={idx} className="flex-1 mx-1">
                <div className="bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-t" style={{height: `${height * 2}%`}}></div>
                <p className="text-xs text-gray-400 text-center mt-2">S{idx + 15}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-sm text-gray-400">Story Points</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm text-green-400">+28% over 10 sprints</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Team Health Score</h3>
          <div className="relative w-48 h-48 mx-auto">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle cx="96" cy="96" r="88" stroke="#374151" strokeWidth="12" fill="none" />
              <circle cx="96" cy="96" r="88" stroke="#facc15" strokeWidth="12" fill="none"
                strokeDasharray={`${2 * Math.PI * 88 * 0.85} ${2 * Math.PI * 88}`} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">8.5</p>
                <p className="text-sm text-gray-400">Excellent</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Collaboration</span>
              <span className="text-yellow-400">9.2</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Productivity</span>
              <span className="text-yellow-400">8.7</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Well-being</span>
              <span className="text-yellow-400">7.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Brain className="w-6 h-6 text-yellow-400 mr-2" />
          AI Predictions & Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-yellow-400 font-semibold mb-3">Next Sprint Forecast</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Predicted Velocity</p>
                <p className="text-2xl font-bold text-white">52-56 pts</p>
              </div>
              <div className="text-sm text-gray-300">
                <p>• Team capacity: 100%</p>
                <p>• No planned leaves</p>
                <p>• Low technical debt</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-yellow-400 font-semibold mb-3">Risk Factors</h4>
            <div className="space-y-2">
              {[
                { factor: 'Q4 deadline pressure', level: 'Medium' },
                { factor: 'New team member onboarding', level: 'Low' },
                { factor: 'Legacy system migration', level: 'High' }
              ].map((risk, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{risk.factor}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    risk.level === 'High' ? 'bg-red-500/20 text-red-400' :
                    risk.level === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>{risk.level}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-yellow-400 font-semibold mb-3">Optimization Suggestions</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <Lightbulb className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <p>Implement pair programming for complex tasks to reduce cycle time by 20%</p>
              </div>
              <div className="flex items-start">
                <Lightbulb className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <p>Schedule knowledge sharing sessions to improve team skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Performance */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Team Member Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="pb-3 text-gray-400 font-medium">Team Member</th>
                <th className="pb-3 text-gray-400 font-medium">Velocity</th>
                <th className="pb-3 text-gray-400 font-medium">Quality Score</th>
                <th className="pb-3 text-gray-400 font-medium">Collaboration</th>
                <th className="pb-3 text-gray-400 font-medium">Growth</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'Sarah Chen', velocity: 15, quality: 9.2, collab: 9.5, growth: '+12%' },
                { name: 'Mike Johnson', velocity: 13, quality: 8.8, collab: 8.9, growth: '+8%' },
                { name: 'Emily Davis', velocity: 14, quality: 9.0, collab: 9.2, growth: '+15%' },
                { name: 'Alex Kim', velocity: 12, quality: 8.5, collab: 9.0, growth: '+10%' }
              ].map((member, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="py-3 text-white">{member.name}</td>
                  <td className="py-3 text-gray-300">{member.velocity} pts/sprint</td>
                  <td className="py-3">
                    <span className="text-yellow-400">{member.quality}/10</span>
                  </td>
                  <td className="py-3">
                    <span className="text-yellow-400">{member.collab}/10</span>
                  </td>
                  <td className="py-3">
                    <span className="text-green-400">{member.growth}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // AI Assistant Page
  const AIAssistantPage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
      { role: 'assistant', content: 'Hello! I\'m your AI Scrum Assistant. I can help with sprint planning, story estimation, blocker resolution, and team insights. What would you like to know?' }
    ]);

    const handleSend = () => {
      if (message.trim()) {
        setMessages([...messages, { role: 'user', content: message }]);
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: 'Based on your team\'s velocity and current sprint progress, I recommend focusing on completing the authentication module first. This will unblock 3 other stories and help maintain your sprint commitment. Would you like me to analyze the dependencies in more detail?' 
          }]);
        }, 1000);
        setMessage('');
      }
    };

    return (
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">AI Scrum Assistant</h2>
          <p className="text-gray-400">Your intelligent agile companion</p>
        </div>

        <div className="flex-1 bg-gray-800 rounded-xl border border-gray-700 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-3xl rounded-lg p-4 ${
                    msg.role === 'user' ? 'bg-yellow-400 text-black' : 'bg-gray-900 text-white'
                  }`}>
                    {msg.role === 'assistant' && (
                      <div className="flex items-center mb-2">
                        <Brain className="w-5 h-5 mr-2" />
                        <span className="font-semibold">AI Assistant</span>
                      </div>
                    )}
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="border-t border-gray-700 p-4">
            <div className="mb-4 flex flex-wrap gap-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                Estimate this story
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                Analyze sprint risks
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                Suggest team pairing
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                Review velocity trends
              </button>
            </div>

            {/* Message Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-gray-900 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-yellow-400 focus:outline-none"
                placeholder="Ask anything about your sprints, team, or agile practices..."
              />
              <button
                onClick={handleSend}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Settings Page
  const SettingsPage = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Settings</h2>
        <p className="text-gray-400">Configure your AI-powered Scrum workspace</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Integration Settings */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Integrations</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <p className="text-white font-medium">Jira</p>
                  <p className="text-sm text-gray-400">Connected to workspace</p>
                </div>
              </div>
              <button className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm">Connected</button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <div>
                  <p className="text-white font-medium">Microsoft Teams</p>
                  <p className="text-sm text-gray-400">Post updates to channels</p>
                </div>
              </div>
              <button className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm">Connected</button>
            </div>
          </div>
        </div>

        {/* AI Configuration */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">AI Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Story Point Scale</label>
              <select className="w-full bg-gray-900 text-white rounded-lg px-4 py-2 border border-gray-700">
                <option>Fibonacci (1, 2, 3, 5, 8, 13)</option>
                <option>Linear (1, 2, 3, 4, 5)</option>
                <option>T-Shirt (XS, S, M, L, XL)</option>
              </select>
            </div>
            
            <div>
              <label className="text-gray-400 text-sm mb-2 block">AI Response Style</label>
              <select className="w-full bg-gray-900 text-white rounded-lg px-4 py-2 border border-gray-700">
                <option>Balanced</option>
                <option>Detailed</option>
                <option>Concise</option>
              </select>
            </div>
            
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Auto-update Threshold</label>
              <div className="flex items-center space-x-4">
                <input type="range" className="flex-1" />
                <span className="text-white">Medium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Layout
  return (
    <div className="min-h-screen bg-black text-white">
      <TopNavigation />
      
      {currentView === 'home' && <HomePage />}
      
      {currentView === 'documentation' && <DocumentationPage />}
      
      {currentView === 'dashboard' && (
        <>
          <DashboardNavigation />
          <Notification />
          
          <div className={`transition-all duration-300 pt-16 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
            <div className="p-6">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-white">
                  <Menu className="w-6 h-6" />
                </button>
                
                <div className="flex items-center space-x-4 ml-auto">
                  <button className="relative text-gray-400 hover:text-white">
                    <Activity className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
                  </button>
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                </div>
              </div>

              {/* Page Content */}
              <div className="max-w-7xl mx-auto">
                {currentPage === 'dashboard' && <DashboardPage />}
                {currentPage === 'epics' && <EpicGeneratorPage />}
                {currentPage === 'daily' && <DailyUpdatesPage />}
                {currentPage === 'analytics' && <AnalyticsPage />}
                {currentPage === 'ai-assistant' && <AIAssistantPage />}
                {currentPage === 'settings' && <SettingsPage />}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;