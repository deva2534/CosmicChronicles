# Cosmic Chronicles

**An Interactive Astronomical Events Website**

Discover the wonders of the universe through historical astronomical events, space timelines, educational content, interactive games and many more. Built with TypeScript.

![Cosmic Chronicles](https://wallpapercat.com/w/full/8/7/7/194290-3840x2160-desktop-4k-outer-space-wallpaper-photo.jpg)

## Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/deva2534/CosmicChronicles.git

#move into the project directory
cd CosmicChronicles

# Install dependencies
npm install

# Start the development server
npm run dev
```

##  Features

### **Space Shuttle Intro Experience**
- Immersive 2D space shuttle launch sequence with realistic HUD
- Voice narration with audio controls (Works in Firefox browser)

### **Astronomical Events Explorer**
- Browse historical astronomical events by date
- Real-time NASA APOD (Astronomy Picture of the Day) integration
- High-quality space imagery with detailed descriptions

### **Cosmic Timeline**
- Interactive timeline from Big Bang to future missions
- Animated scroll effects with parallax design

### **2D Solar System Explorer**
- Real-time 2D solar system simulation
- Interactive planet selection with detailed information
- Orbital mechanics visualization
- Speed controls and orbit toggles

### **Astronomy Calculators**
- Professional astronomical calculation tools:
  - Stellar distance using parallax
  - Light travel time calculator
  - Telescope performance metrics
  - Escape velocity calculator

### **Space Education Center**
- Curated educational videos with manual guides
- Interactive learning content about space missions

### **Cosmic Game Center**
- **Constellation Connect**: Learn star patterns
- **Space Quiz**: Test astronomical knowledge
- **Asteroid Defense**: Protect Earth in this space shooter

### **Daily Horoscope**
- Personalized cosmic readings (For now its not Dynamic - Its Harcoded values)
- Zodiac sign information with elements and ruling planets
- Love, career, and general predictions

### **Social Hub**
- Community feed for sharing discoveries
- Astronomy challenges and achievements
- Global leaderboard system
- Interactive posting with photos and locations

> *Note: Social Hub UI is included but not live yet. It’s planned for future roadmap enhancements.*

### **Cosmic Store**
- Featured space merchandise and books
- Educational materials and collectibles

> *Note: Cosmic Store UI is included but not live yet. It’s planned for future roadmap enhancements.*

### **Interstellar Technology**
- Wormhole navigation simulator
- Black hole analysis tools
- Spacecraft systems monitoring
- Tesseract communication interface

> *Note: The Interstellar Technology section is inspired by the movie Interstellar and explains some of its terminology.*

### **AI Chatbot (Nebula)**
- Intelligent space-themed conversations
- Astronomy knowledge base
- Interactive cosmic guidance

> *Note: Nebula doesn't use any external AI yet—it's planned for future roadmap enhancements. Still, it won't disappoint; it answers some common questions related to the cosmos.*

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Date Handling**: date-fns
- **APIs**: NASA APOD integration

##  Features Overview

### Navigation Sections

| Section | Description | Key Features |
|---------|-------------|--------------|
| **Events** | Historical astronomical events | NASA APOD integration, date navigation |
| **Education** | Learning materials | Video content, manuals, difficulty levels |
| **Timeline** | Cosmic history | Interactive timeline, parallax effects |
| **Solar System** | 2D planet explorer | Real-time simulation, detailed info |
| **Calculators** | Astronomy tools | Professional calculations, explanations |
| **Games** | Interactive learning | Constellation game, quiz, shooter |
| **Horoscope** | Daily predictions | Zodiac information, personalized readings |
| **Social** | Community features | Posts, challenges, leaderboard |
| **Store** | Merchandise | Books, apparel, collectibles |
| **Interstellar** | Advanced tech | Wormhole sim, black hole analysis |

### Key Components

- **StarField**: Animated background with twinkling stars
- **EventCard**: Interactive cards for astronomical events
- **Calendar**: Date picker with cosmic styling
- **Chatbot**: AI assistant for space questions
- **GameCenter**: Hub for educational games
- **SolarSystemExplorer**: 2D planetary visualization

## Performance Features

- **Lazy loading** for optimal performance
- **Caching system** for API responses
- **Optimized animations** with requestAnimationFrame
- **Responsive images** with proper sizing
- **Efficient state management** with React hooks

## Project Structure

```
src/
├── components/           # React components
│   ├── games/           # Game components
│   ├── AstronomyCalculators.tsx
│   ├── Calendar.tsx
│   ├── Chatbot.tsx
│   ├── CosmicTimeline.tsx
│   ├── EventCard.tsx
│   ├── EventModal.tsx
│   ├── GameCenter.tsx
│   ├── Horoscope.tsx
│   ├── InterstellarTech.tsx
│   ├── SocialHub.tsx
│   ├── SolarSystemExplorer.tsx
│   ├── SpaceEducation.tsx
│   ├── SpaceFranchise.tsx
│   ├── SpaceShuttleIntro.tsx
│   └── StarField.tsx
├── data/                # Data management
│   └── events.ts        # NASA APOD integration
├── types/               # TypeScript definitions
│   └── Event.ts
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and animations
```

## Acknowledgments

- **NASA** for providing the APOD API and astronomical data
- **ESA** for space mission information
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/deva2534/CosmicChronicles/issues) page
2. Create a new issue with detailed information

## Star the Project

If you find this project helpful, please consider giving it a star on GitHub!

---

**Built with love for space enthusiasts and curious minds exploring the cosmos.**

*"The cosmos is within us. We are made of star-stuff." - Carl Sagan*
