// Root layout — wraps every page. It mounts the shared store (PlayerProvider)
// and the on-screen frame (AppShell). Data is loaded by the store in the
// browser (see lib/store.jsx), so this file does no fetching itself.

import "./globals.css";
import { PlayerProvider } from "../lib/store";
import { AppShell } from "../components/AppShell";

export const metadata = { title: "RADDMP", description: "Real-time music player" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PlayerProvider>
          <AppShell>{children}</AppShell>
        </PlayerProvider>
      </body>
    </html>
  );
}