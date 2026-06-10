# Malvan Coastal Guardian

**An AI-Powered Platform for Protecting Malvan's Fishing Communities and Marine Ecosystems**

## Overview

Malvan Coastal Guardian is a comprehensive web application designed to empower artisanal fishing communities in Malvan, Maharashtra, to detect, report, and combat illegal fishing activities while promoting sustainable ocean practices. The platform directly supports two United Nations Sustainable Development Goals: **SDG 14 (Life Below Water)** and **SDG 8 (Decent Work and Economic Growth)**.

## Problem Statement

The marine ecosystem around Malvan faces severe threats from illegal fishing practices. Bottom trawling, LED fishing, and encroachment by industrial fishing fleets destroy coral reefs, deplete fish populations, and devastate the livelihoods of artisanal fishing communities. These destructive practices indiscriminately catch juvenile fish and eggs, threatening long-term marine biodiversity and ecosystem health.

## Solution

Malvan Coastal Guardian provides a unified platform combining community engagement, artificial intelligence, and modern web technology to:

- **Enable Community Reporting**: Easy-to-use incident reporting form for fishers and community members
- **AI-Powered Analysis**: LLM-based analyzer classifies activities and assesses threat levels
- **Real-time Tracking**: Interactive dashboard displaying all reported incidents with status indicators
- **Educational Resources**: Comprehensive information on sustainable practices and regulations
- **Secure Authentication**: Manus OAuth integration for user access control
- **Owner Notifications**: Automatic alerts for high-severity incidents

## Key Features

### 1. Landing Page
An elegant, polished homepage introducing the platform's mission, highlighting SDG goals, and featuring call-to-action buttons for key features.

### 2. Interactive Google Maps
Visualize fishing zones, marine protected areas, and reported illegal fishing incidents with color-coded markers and location selection capabilities.

### 3. Incident Reporting Form
Comprehensive form for reporting illegal activities with:
- Activity type selector (bottom trawling, LED fishing, encroachment, other)
- Detailed description field
- Location picker using interactive map
- Photo upload functionality
- Form validation and error handling

### 4. AI-Powered Fishing Activity Analyzer
LLM-based analyzer that:
- Classifies fishing activities
- Assesses threat levels (low, medium, high, critical)
- Recommends appropriate actions
- Explains conservation impact

### 5. Incident Dashboard
Comprehensive dashboard displaying:
- All reported incidents with status indicators (pending, verified, resolved)
- Filtering by activity type and status
- Summary statistics panel
- Incident detail cards with photos and AI analysis
- User's own reports section

### 6. Educational Resources
Comprehensive information covering:
- Sustainable fishing practices
- CRZ (Coastal Regulation Zone) regulations
- WTO agreements and international frameworks
- Marine biodiversity conservation tips
- Category-based filtering

### 7. User Authentication
- Manus OAuth integration for secure login
- User profile management
- Role-based access control (user, admin)
- Protected routes for authenticated features

## Technical Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Maps**: Google Maps integration
- **State Management**: tRPC with React Query
- **Routing**: Wouter for client-side navigation

### Backend
- **Framework**: Express.js with tRPC
- **Database**: MySQL with Drizzle ORM
- **AI Integration**: LLM-powered analyzer
- **Authentication**: Manus OAuth
- **File Storage**: S3 for incident photos

### Testing
- **Framework**: Vitest
- **Coverage**: 15+ tests covering core procedures

## Getting Started

### Prerequisites
- Node.js 22.13.0+
- pnpm 10.4.1+
- Access to Manus platform (database and APIs provided)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to the provided development URL (typically `http://localhost:3000`)

### Environment Setup

The following environment variables are automatically configured by the Manus platform:
- `DATABASE_URL`: MySQL/TiDB connection string
- `JWT_SECRET`: Session cookie signing secret
- `VITE_APP_ID`: Manus OAuth application ID
- `OAUTH_SERVER_URL`: Manus OAuth backend base URL
- `VITE_OAUTH_PORTAL_URL`: Manus login portal URL
- `BUILT_IN_FORGE_API_URL`: Manus built-in APIs
- `BUILT_IN_FORGE_API_KEY`: Bearer token for Manus APIs

Google Maps integration is provided through the Manus proxy, so no separate API key is required.

## Project Structure

```
malvan-coastal-guardian/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components (Home, ReportIncident, Dashboard, Resources, Analyzer)
│   │   ├── components/    # Reusable UI components (Map, DashboardLayout, etc.)
│   │   ├── lib/           # Utilities and helpers
│   │   └── App.tsx        # Main app component with routing
│   └── public/            # Static assets
├── server/                # Express backend
│   ├── routers.ts         # tRPC procedures for incidents, analyzer, zones, resources
│   ├── db.ts              # Database query helpers
│   └── _core/             # Core infrastructure (auth, OAuth, LLM, storage)
├── drizzle/               # Database schema and migrations
├── shared/                # Shared types and constants
├── PROJECT_DOCUMENTATION.md # Detailed project documentation
├── README.md              # This file
└── package.json           # Project dependencies
```

## API Endpoints

### Incidents
- `incidents.list` - Get all incidents with optional filtering
- `incidents.create` - Create a new incident report
- `incidents.getUserIncidents` - Get incidents reported by current user
- `incidents.stats` - Get incident statistics

### Analyzer
- `analyzer.analyzeActivity` - Analyze a fishing activity description

### Zones
- `zones.list` - Get all fishing zones
- `zones.getByType` - Get zones by type (artisanal, protected, industrial)

### Resources
- `resources.list` - Get educational resources with optional filtering
- `resources.getByCategory` - Get resources by category

### Authentication
- `auth.me` - Get current user information
- `auth.logout` - Logout current user

## Database Schema

### Users
Stores user information and authentication details.

### Incidents
Stores reported illegal fishing incidents with location, photos, and AI analysis.

### Fishing Zones
Stores information about artisanal, protected, and industrial fishing zones.

### Educational Resources
Stores articles, guides, and regulations for user education.

### Notifications
Stores user and owner notifications for incident alerts.

## Testing

Run the test suite:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test:watch
```

## Sustainable Development Impact

### SDG 14 - Life Below Water
The platform directly protects marine ecosystems by enabling community-driven monitoring of illegal fishing practices. By combating bottom trawling, LED fishing, and encroachment, we preserve coral reefs, fish populations, and marine biodiversity.

### SDG 8 - Decent Work and Economic Growth
By protecting artisanal fishing grounds and supporting sustainable practices, the platform ensures stable livelihoods for fishing communities. It promotes fair competition against industrial fleets and enables economic growth through sustainable resource management.

## Future Enhancements

1. **Advanced Map Features**: Real-time incident clustering, heatmaps showing illegal activity hotspots
2. **Mobile App**: Native mobile application for easier field reporting
3. **Community Verification**: Peer review system for incident verification
4. **Predictive Analytics**: ML models to predict illegal fishing hotspots
5. **Integration with Authorities**: Direct reporting to coast guard and maritime authorities
6. **Multilingual Support**: Support for local languages (Marathi, Konkani)
7. **Blockchain Integration**: Immutable incident records for legal proceedings
8. **Real-time Alerts**: SMS/WhatsApp notifications for high-severity incidents
9. **Drone Integration**: Support for drone footage analysis
10. **Community Rewards**: Gamification and incentive system for active reporters

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact the development team or open an issue on GitHub.

## Acknowledgments

- Manus team for providing the web development platform
- United Nations for the Sustainable Development Goals framework
- Coastal communities of Malvan for their dedication to marine conservation
- All contributors and supporters of this initiative

## Contact

**Malvan Coastal Guardian**
- Email: info@malvancoastalguardian.com
- Website: https://malvancoastalguardian.manus.space

---

**Protecting Malvan's Fishing Communities & Marine Ecosystems** 🌊
