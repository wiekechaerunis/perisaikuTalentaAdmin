import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { UnsavedChangesModal } from "../components/shared/UnsavedChangesModal";

interface FormGuardContextValue {
  isDirty: boolean;
  setDirty: (dirty: boolean) => void;
  guardAction: (action: () => void) => void;
}

const FormGuardContext = createContext<FormGuardContextValue | null>(null);

export function FormGuardProvider({ children }: { children: ReactNode }) {
  const [isDirty, setDirty] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const guardAction = useCallback((action: () => void) => {
    if (isDirty) setPendingAction(() => action);
    else action();
  }, [isDirty]);

  return (
    <FormGuardContext.Provider value={{ isDirty, setDirty, guardAction }}>
      {children}
      {pendingAction && (
        <UnsavedChangesModal
          onStay={() => setPendingAction(null)}
          onLeave={() => {
            const action = pendingAction;
            setPendingAction(null);
            setDirty(false);
            action();
          }}
        />
      )}
    </FormGuardContext.Provider>
  );
}

export function useFormGuard() {
  const ctx = useContext(FormGuardContext);
  if (!ctx) throw new Error("useFormGuard must be used within FormGuardProvider");
  return ctx;
}
