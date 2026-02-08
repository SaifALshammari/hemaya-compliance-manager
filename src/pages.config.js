/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import Analyses from './pages/Analyses';
import Frameworks from './pages/Frameworks';
import MappingReview from './pages/MappingReview';
import GapsRisks from './pages/GapsRisks';
import Reports from './pages/Reports';
import AIInsights from './pages/AIInsights';
import Explainability from './pages/Explainability';
import AuditTrail from './pages/AuditTrail';
import Simulation from './pages/Simulation';
import AIAssistant from './pages/AIAssistant';
import Settings from './pages/Settings';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Dashboard": Dashboard,
    "Policies": Policies,
    "Analyses": Analyses,
    "Frameworks": Frameworks,
    "MappingReview": MappingReview,
    "GapsRisks": GapsRisks,
    "Reports": Reports,
    "AIInsights": AIInsights,
    "Explainability": Explainability,
    "AuditTrail": AuditTrail,
    "Simulation": Simulation,
    "AIAssistant": AIAssistant,
    "Settings": Settings,
}

export const pagesConfig = {
    mainPage: "Dashboard",
    Pages: PAGES,
    Layout: __Layout,
};