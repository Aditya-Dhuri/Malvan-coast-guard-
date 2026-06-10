# Malvan Coastal Guardian - AI Final Project Documentation

## Problem Statement

The marine ecosystem around Malvan, Maharashtra, faces severe threats from illegal fishing practices. Bottom trawling, LED fishing, and encroachment by industrial fishing fleets from neighboring states are destroying coral reefs, depleting fish populations, and devastating the livelihoods of artisanal fishing communities. These destructive practices indiscriminately catch juvenile fish and eggs, threatening long-term marine biodiversity and ecosystem health. Artisanal fishers lack modern infrastructure and adequate support to compete with industrial fleets, leading to economic instability and declining catches.

**Key Issues:**
- **Bottom Trawling**: Weighted nets dragged across the ocean floor destroy coral reefs and seagrass beds, depleting fish stocks for decades
- **LED Fishing**: Bright lights attract fish unnaturally, causing overfishing and capture of non-target species
- **Industrial Encroachment**: High-speed industrial vessels encroach upon traditional artisanal fishing grounds
- **Economic Impact**: Artisanal fishers struggle to sustain livelihoods due to reduced catches and lack of modern infrastructure
- **Marine Biodiversity Loss**: Destructive practices threaten coral ecosystems and fish populations

## Project Objective

Malvan Coastal Guardian is an AI-powered web platform designed to empower artisanal fishing communities to detect, report, and combat illegal fishing activities while promoting sustainable ocean practices. The platform directly supports two United Nations Sustainable Development Goals:

**SDG 14 - Life Below Water**: By combating destructive fishing practices and protecting marine ecosystems, the platform contributes to conserving and sustainably using oceans, seas, and marine resources.

**SDG 8 - Decent Work and Economic Growth**: By protecting artisanal fishing grounds from illegal practices and industrial encroachment, the platform ensures sustainable livelihoods for fishing communities and promotes economic growth through fair resource management.

The platform integrates artificial intelligence to analyze reported fishing activities, assess threat levels, and recommend appropriate actions, enabling efficient community-driven monitoring of marine resources.

## Solution Description

Malvan Coastal Guardian is a comprehensive web application built with modern technologies (React, TypeScript, tRPC, Express, MySQL) that provides:

### 1. **Landing Page with Mission Statement**
An elegant, polished homepage that introduces the platform's mission, highlights the SDG goals, presents the problem statement, and features call-to-action buttons. The design uses a gradient background, responsive layout, and visual hierarchy to convey trust and authority.

### 2. **Interactive Google Maps Interface**
The platform integrates Google Maps to visualize:
- Fishing zones (artisanal, protected, industrial)
- Marine protected areas
- Reported illegal fishing incidents with color-coded markers
- User-selected incident locations during reporting

### 3. **Community Incident Reporting Form**
A comprehensive form allowing fishers and community members to report illegal activities with:
- Activity type selector (bottom trawling, LED fishing, encroachment, other)
- Detailed description field with character limit
- Location picker using interactive map
- Photo upload functionality with preview
- Form validation and error handling
- Success confirmation with redirect to dashboard

### 4. **AI-Powered Fishing Activity Analyzer**
An LLM-based analyzer that processes reported observations to:
- Classify the activity type (bottom trawling, LED fishing, encroachment, other)
- Assess threat level (low, medium, high, critical) based on:
  - Impact on marine biodiversity (coral reefs, fish stocks)
  - Violation severity (bottom trawling is highly destructive)
  - Immediate danger to artisanal fishers' livelihoods
- Recommend appropriate actions (report to authorities, community alert, monitoring, etc.)
- Explain conservation impact

### 5. **Incident Dashboard**
A comprehensive dashboard displaying:
- All reported incidents with status indicators (pending, verified, resolved)
- Filtering by activity type and status
- Summary statistics panel showing:
  - Total reports tracked
  - Incidents by status (pending, verified, resolved)
  - Incidents by activity type
  - Incidents by threat level
- Incident detail cards with location, timestamp, photos, and AI analysis
- User's own reports section

### 6. **Educational Resources Section**
Comprehensive information covering:
- **Sustainable Fishing Practices**: Selective gear, seasonal restrictions, sustainable catch limits
- **CRZ Regulations**: Coastal Regulation Zone Notification 2019, protection of coastal areas, fishing restrictions
- **WTO Agreements**: International frameworks promoting sustainable fishing and combating illegal, unreported fishing
- **Marine Biodiversity Conservation**: Information about coral reefs, fish species, and conservation tips
- Category-based filtering (sustainable practices, regulations, conservation, general)

### 7. **Alert and Notification System**
- Automatic notification to site owner when new incidents are reported
- High-severity incident alerts
- In-app notification display for users
- Notification status tracking (read/unread)

### 8. **User Authentication**
- Manus OAuth integration for secure login
- User profile management
- Role-based access control (user, admin)
- Protected routes for authenticated features
- Logout functionality

## Technical Implementation

### Backend Architecture
- **Framework**: Express.js with tRPC for type-safe API procedures
- **Database**: MySQL with Drizzle ORM for schema management
- **AI Integration**: LLM-powered analyzer using Manus built-in API
- **Authentication**: Manus OAuth with session cookies
- **File Storage**: S3 storage for incident photos

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Maps**: Google Maps integration with MapView component
- **State Management**: tRPC with React Query for server state
- **Routing**: Wouter for client-side navigation

### Database Schema
- **Users**: Authentication and profile management
- **Incidents**: Reported illegal fishing activities with location, photos, and AI analysis
- **Fishing Zones**: Artisanal, protected, and industrial zones
- **Educational Resources**: Articles, guides, and regulations
- **Notifications**: User and owner notifications

## Key Features

1. **Elegant, Polished Design**: Refined UI with consistent typography, smooth animations, and responsive layout
2. **Real-time Incident Tracking**: Live dashboard showing all reported incidents with status indicators
3. **AI-Powered Analysis**: LLM classifies activities and assesses threat levels
4. **Community Engagement**: Easy reporting form encourages participation from fishers and community members
5. **Educational Content**: Comprehensive resources on sustainable practices and regulations
6. **Secure Authentication**: Manus OAuth ensures secure user access
7. **Mobile Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## Testing

The platform includes 15 passing vitest tests covering:
- Incident creation and retrieval
- Filtering by status and activity type
- Statistics calculation
- AI analyzer functionality
- User authentication
- Resource filtering

## Future Scope

1. **Advanced Map Features**: Real-time incident clustering, heatmaps showing illegal activity hotspots
2. **Mobile App**: Native mobile application for easier field reporting
3. **Community Verification**: Peer review system where community members can verify incidents
4. **Predictive Analytics**: ML models to predict illegal fishing hotspots based on historical data
5. **Integration with Authorities**: Direct reporting to coast guard and maritime authorities
6. **Multilingual Support**: Support for local languages (Marathi, Konkani)
7. **Blockchain Integration**: Immutable incident records for legal proceedings
8. **Real-time Alerts**: SMS/WhatsApp notifications for high-severity incidents
9. **Drone Integration**: Support for drone footage analysis
10. **Community Rewards**: Gamification and incentive system for active reporters

## Sustainable Development Impact

**SDG 14 - Life Below Water**: The platform directly protects marine ecosystems by enabling community-driven monitoring of illegal fishing practices. By combating bottom trawling, LED fishing, and encroachment, we preserve coral reefs, fish populations, and marine biodiversity.

**SDG 8 - Decent Work and Economic Growth**: By protecting artisanal fishing grounds and supporting sustainable practices, the platform ensures stable livelihoods for fishing communities. It promotes fair competition against industrial fleets and enables economic growth through sustainable resource management.

## Conclusion

Malvan Coastal Guardian represents a comprehensive solution to the illegal fishing crisis in Malvan, combining community engagement, artificial intelligence, and modern web technology to protect marine ecosystems and support artisanal fishing communities. The platform empowers local stakeholders to become guardians of their own marine resources while contributing to global sustainable development goals.
