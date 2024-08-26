import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ModeToggle } from "./components/mode-toggle";
import NetworkPage from "./pages/NetworkPage";
import SecretRecoveryWarningPage from "./pages/SecretRecoveryWarningPage";
import SecretRecoveryPhrasePage from "./pages/SecretRecoveryPhrasePage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WalletPage from "./pages/WalletPage";
import { useState } from "react";

function App() {
  const [mnemonic, setMnemonic] = useState<string>("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/network",
      element: <NetworkPage />,
    },
    {
      path: "/network/warning",
      element: <SecretRecoveryWarningPage />,
    },
    {
      path: "/network/seed",
      element: (
        <SecretRecoveryPhrasePage
          setMnemonic={(seed: string) => {
            setMnemonic(seed);
          }}
        />
      ),
    },
    {
      path: "/network/seed/password",
      element: <CreatePasswordPage />,
    },
    {
      path: "/network/wallets",
      element: <WalletPage mnemonic={mnemonic} />,
    },
  ]);
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
