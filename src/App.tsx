import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { useEffect } from "react";

import Index from "./pages/Index.tsx";
import Loans from "./pages/Loans.tsx";
import Team from "./pages/Team.tsx";
import NotFound from "./pages/NotFound.tsx";
import BecomeMember from "./pages/BecomeMember.tsx";

const queryClient = new QueryClient();


// 🔍 Debug Route Logger (like your useEffect example)
const RouteDebugger = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("🎯 App mounted");
  }, []);

  useEffect(() => {
    console.log("📄 Route changed to:", location.pathname);
  }, [location]);

  console.log("🔄 App rendering...");

  return null;
};


const App = () => {
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <RouteDebugger />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {console.log("🏠 Rendering Home")}
                    <Index />
                  </>
                }
              />

              <Route
                path="/loans"
                element={
                  <>
                    {console.log("💰 Rendering Loans")}
                    <Loans />
                  </>
                }
              />

              <Route
                path="/team"
                element={
                  <>
                    {console.log("👥 Rendering Team")}
                    <Team />
                  </>
                }
              />

              <Route
                path="*"
                element={
                  <>
                    {console.log("❓ Rendering NotFound")}
                    <NotFound />
                  </>
                }
              />
              <Route path="/join" element={<BecomeMember />} />

            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("❌ Error in App render:", error);

    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h1>App crashed</h1>
        <p>{error instanceof Error ? error.message : "Unknown error"}</p>
      </div>
    );
  }
};

export default App;