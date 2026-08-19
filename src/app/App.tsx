import { RouterProvider } from "react-router";
import { SessionProvider } from "../lib/session";
import { router } from "./router";

export default function App() {
  return (
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  );
}
