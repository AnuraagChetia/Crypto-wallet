import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ModeToggle } from "./components/mode-toggle";
import NetworkPage from "./pages/NetworkPage";
import SecretRecoveryWarningPage from "./pages/SecretRecoveryWarningPage";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        {/* <HomePage /> */}
        {/* <NetworkPage /> */}
        <SecretRecoveryWarningPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
