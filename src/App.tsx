import React, { useState, useEffect, useCallback } from 'react';
import { Telescope, Sparkles, Globe, MessageCircle, Calendar as CalendarIcon, Gamepad2, Stars, Users, Rocket, Orbit, Calculator, Zap, Play, ShoppingCart } from 'lucide-react';
import { StarField } from './components/StarField';
import { EventCard } from './components/EventCard';
import { EventModal } from './components/EventModal';
import { DateSelector } from './components/DateSelector';
import { Calendar } from './components/Calendar';
import { Horoscope } from './components/Horoscope';
import { Chatbot } from './components/Chatbot';
import { GameCenter } from './components/GameCenter';
import { SocialHub } from './components/SocialHub';
import { CosmicTimeline } from './components/CosmicTimeline';
import { SolarSystemExplorer } from './components/SolarSystemExplorer';
import { AstronomyCalculators } from './components/AstronomyCalculators';
import { InterstellarTech } from './components/InterstellarTech';
import { SpaceEducation } from './components/SpaceEducation';
import { SpaceFranchise } from './components/SpaceFranchise';
import { SpaceShuttleIntro } from './components/SpaceShuttleIntro';
import { getEventsForDate } from './data/events';
import { AstronomicalEvent } from './types/Event';

type ActiveSection = 'events' | 'education' | 'timeline' | 'solar-system' | 'calculators' | 'games' | 'horoscope' | 'social' | 'franchise' | 'interstellar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<AstronomicalEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<AstronomicalEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>('events'); // Default to events
  const [showIntro, setShowIntro] = useState(true);

  const loadEvents = useCallback(async (date: Date) => {
    setIsLoading(true);
    
    try {
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const eventsForDate = await getEventsForDate(date);
      setEvents(eventsForDate);
    } catch (error) {
      console.error('Error loading events:', error);
      setEvents([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only load events after intro is complete
    if (!showIntro) {
      loadEvents(selectedDate);
    }
  }, [selectedDate, loadEvents, showIntro]);

  const handleEventClick = (event: AstronomicalEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const formatDateForTitle = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Updated navigation items with Timeline instead of Missions
  const navigationItems = [
    { id: 'events', label: 'Events', icon: Telescope, color: 'from-purple-600 to-blue-600' },
    { id: 'timeline', label: 'Timeline', icon: Rocket, color: 'from-orange-600 to-red-600' },
    { id: 'solar-system', label: 'Solar System', icon: Orbit, color: 'from-yellow-600 to-orange-600' },
    { id: 'education', label: 'Education', icon: Play, color: 'from-red-600 to-pink-600' },
    { id: 'calculators', label: 'Calculators', icon: Calculator, color: 'from-teal-600 to-green-600' },
    { id: 'interstellar', label: 'Interstellar', icon: Zap, color: 'from-violet-600 to-purple-600' },
    { id: 'games', label: 'Games', icon: Gamepad2, color: 'from-green-600 to-emerald-600' },
    { id: 'horoscope', label: 'Horoscope', icon: Stars, color: 'from-indigo-600 to-purple-600' },
    { id: 'social', label: 'Social', icon: Users, color: 'from-blue-600 to-cyan-600' },
    { id: 'franchise', label: 'Store', icon: ShoppingCart, color: 'from-emerald-600 to-teal-600' }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'education':
        return <SpaceEducation />;
      case 'timeline':
        return <CosmicTimeline />;
      case 'solar-system':
        return <SolarSystemExplorer />;
      case 'calculators':
        return <AstronomyCalculators />;
      case 'games':
        return <GameCenter />;
      case 'horoscope':
        return <Horoscope selectedDate={selectedDate} />;
      case 'social':
        return <SocialHub selectedDate={selectedDate} />;
      case 'franchise':
        return <SpaceFranchise />;
      case 'interstellar':
        return <InterstellarTech />;
      case 'events':
      default:
        return (
          <>
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-white/70">Loading cosmic events...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {events.length > 0 ? (
                      `Astronomical Events on ${formatDateForTitle(selectedDate)}`
                    ) : (
                      `No recorded events on ${formatDateForTitle(selectedDate)}`
                    )}
                  </h2>
                  {events.length > 0 ? (
                    <p className="text-gray-300 text-lg">
                      Discover {events.length} remarkable cosmic milestone{events.length !== 1 ? 's' : ''} from history
                    </p>
                  ) : (
                    <p className="text-gray-300 text-lg">
                      Here are some fascinating astronomical events from history
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event, index) => (
                    <div
                      key={event.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <EventCard
                        event={event}
                        onClick={() => handleEventClick(event)}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        );
    }
  };

  // Show intro animation first
  if (showIntro) {
    return <SpaceShuttleIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="relative pt-12 pb-8">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                <Telescope className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cosmic Chronicles
              </h1>
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Discover the astronomical events, horoscopes, and cosmic games that connect us to the universe
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <Globe className="w-5 h-5" />
              <span className="text-lg">
                Exploring the cosmos on {formatDateForTitle(selectedDate)}
              </span>
            </div>
          </div>
        </header>

        {/* Compact Grid Navigation */}
        <div className="container mx-auto px-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3 max-w-7xl mx-auto">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as ActiveSection)}
                  className={`group relative p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <IconComponent className="w-6 h-6" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Date Selector - Only show for events and horoscope sections */}
        {(activeSection === 'events' || activeSection === 'horoscope') && (
          <div className="container mx-auto px-6">
            <DateSelector 
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              onCalendarClick={() => setIsCalendarOpen(true)}
            />
          </div>
        )}

        {/* Main Content Section */}
        <main className="container mx-auto px-6 pb-12">
          {renderActiveSection()}
        </main>

        {/* Footer */}
        <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                Explore the cosmos through events, horoscopes, timeline, and interactive experiences
              </p>
              <p className="text-gray-500 text-sm mb-3">
                Data compiled from NASA, ESA, and astronomical archives worldwide
              </p>
              <p className="text-gray-500 text-xs">
                We do not own any copyrights for the images used in this website. All images are used for educational purposes only.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Modals */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Calendar
        selectedDate={selectedDate}
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onDateSelect={handleDateChange}
      />

      <Chatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </div>
  );
}

export default App;
