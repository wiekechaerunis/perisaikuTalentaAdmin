import React, { createContext, useContext, useState } from "react";

export interface SessionState {
  userName: string;
  userRole: string;
  companyName: string;
  email: string;
  phone: string;
  verificationStatus: "verified" | "pending";
}

export const DEFAULT_SESSION: SessionState = {
  userName: "Budi Santoso",
  userRole: "Superadmin",
  companyName: "PT Perisaiku Talenta",
  email: "budi.santoso@gmail.com",
  phone: "812 3456 7890",
  verificationStatus: "verified",
};

const SessionContext = createContext<{
  session: SessionState;
  setSession: React.Dispatch<React.SetStateAction<SessionState>>;
} | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<SessionState>(DEFAULT_SESSION);
  return <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}
