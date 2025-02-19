import "devextreme/dist/css/dx.light.css";
import "devextreme/dist/css/dx.light.css";
import "./themes/generated/theme.base.dark.css";
import "./themes/generated/theme.base.css";
import "./themes/generated/theme.additional.dark.css";
import "./themes/generated/theme.additional.css";
import "devextreme/dist/css/dx.light.css";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { LoadPanel } from "devextreme-react";
import { AuthProvider, useAuth } from "./contexts/auth";
import Content from "./Content";
import UnauthenticatedContent from "./components/common/UnauthenticatedContent";
import { useScreenSizeClass } from "./utils/media-query";
import { ThemeContext, useThemeContext } from "./themes/theme";
import { NavigationProvider } from "./contexts/navigation";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <LoadPanel
        indicatorSrc="../public/loading.gif"
        visible={true}
        width={100}
        height={100}
        showPane={false}
      />
    );
  }

  if (user) {
    return <Content />;
  }

  return <UnauthenticatedContent />;
}

export default function Root() {
  const screenSizeClass = useScreenSizeClass();
  const themeContext = useThemeContext();

  return (
    <Router>
      <ThemeContext.Provider value={themeContext}>
        <AuthProvider>
          <NavigationProvider>
            <div className={`app ${screenSizeClass}`}>
              <App />
            </div>
          </NavigationProvider>
        </AuthProvider>
      </ThemeContext.Provider>
    </Router>
  );
}
