import { useState } from "react";
import LoginPage from "./LoginPage";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginPage onLogin={(u) => setUser(u)} />;
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f1729",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      fontSize: "24px"
    }}>
      Willkommen, {user.email}! Dashboard folgt...
    </div>
  );
}
