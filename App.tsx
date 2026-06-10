import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ReportIncident from "./pages/ReportIncident";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Analyzer from "./pages/Analyzer";
import Profile from "./pages/Profile";
import NotificationPreferences from "./pages/NotificationPreferences";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/report" component={ReportIncident} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/resources" component={Resources} />
      <Route path="/analyzer" component={Analyzer} />
      <Route path="/profile" component={Profile} />
      <Route path="/notification-preferences" component={NotificationPreferences} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
