import { useState } from “react”;

export default function LoginPage({ onLogin }) {
const [email, setEmail] = useState(””);
const [password, setPassword] = useState(””);
const [error, setError] = useState(””);
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
setError(””);
if (!email || password.length < 4) {
setError(“Bitte E-Mail und mind. 4 Zeichen Passwort eingeben.”);
return;
}
setLoading(true);
await new Promise(r => setTimeout(r, 800));
setLoading(false);
if (onLogin) onLogin({ email });
};

return (
<div style={{
minHeight: “100vh”,
background: “linear-gradient(135deg, #0f1729 0%, #1a2744 50%, #0f1729 100%)”,
display: “flex”, alignItems: “center”, justifyContent: “center”,
fontFamily: “‘DM Sans’, sans-serif”,
padding: “24px”,
}}>
<style>{`
@import url(‘https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap’);
* { box-sizing: border-box; margin: 0; padding: 0; }

```
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .login-card { animation: fadeIn 0.5s ease both; }

    .input-field {
      width: 100%;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      padding: 13px 16px;
      color: #fff;
      font-size: 15px;
      font-family: 'DM Sans', sans-serif;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .input-field::placeholder { color: rgba(255,255,255,0.3); }
    .input-field:focus {
      border-color: #4C9EFF;
      background: rgba(76,158,255,0.08);
    }

    .btn-login {
      width: 100%;
      padding: 14px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-size: 15px;
      font-weight: 700;
      font-family: 'DM Sans', sans-serif;
      letter-spacing: 0.03em;
      background: linear-gradient(135deg, #2979FF, #00B4D8);
      color: white;
      transition: opacity 0.2s, transform 0.15s;
      position: relative;
      overflow: hidden;
    }
    .btn-login:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
    .btn-login:disabled { opacity: 0.6; cursor: not-allowed; }

    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
      animation: float 6s ease-in-out infinite;
    }
  `}</style>

  {/* Background orbs */}
  <div className="orb" style={{ width: 300, height: 300, background: "rgba(41,121,255,0.15)", top: "10%", left: "15%", animationDelay: "0s" }}/>
  <div className="orb" style={{ width: 200, height: 200, background: "rgba(0,180,216,0.12)", bottom: "15%", right: "20%", animationDelay: "3s" }}/>

  {/* Card */}
  <div className="login-card" style={{
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 24,
    padding: "48px 40px",
    width: "100%", maxWidth: 420,
    boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
  }}>

    {/* Logo */}
    <div style={{ textAlign: "center", marginBottom: 36 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 16,
        background: "linear-gradient(135deg, #2979FF, #00B4D8)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 16px",
        fontSize: 24, fontWeight: 800,
        boxShadow: "0 8px 24px rgba(41,121,255,0.35)",
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "0.08em", color: "#fff" }}>
        NEXUS<span style={{ color: "#4C9EFF" }}>HR</span>
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>
        KI-gestütztes Personalmanagement & Controlling
      </div>
    </div>

    {/* Form */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      <div>
        <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", display: "block", marginBottom: 8 }}>
          E-Mail
        </label>
        <input
          className="input-field"
          type="email"
          placeholder="name@unternehmen.de"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
        />
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
            Passwort
          </label>
          <a href="#" style={{ fontSize: 12, color: "#4C9EFF", textDecoration: "none" }}>Vergessen?</a>
        </div>
        <input
          className="input-field"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
        />
      </div>

      {error && (
        <div style={{
          background: "rgba(220,53,69,0.15)", border: "1px solid rgba(220,53,69,0.3)",
          borderRadius: 8, padding: "10px 14px",
          fontSize: 13, color: "#FF8A8A",
        }}>
          {error}
        </div>
      )}

      <button className="btn-login" onClick={handleSubmit} disabled={loading} style={{ marginTop: 8 }}>
        {loading ? "Anmelden..." : "Anmelden →"}
      </button>
    </div>

    {/* Demo hint */}
    <div style={{
      marginTop: 24, textAlign: "center",
      fontSize: 12, color: "rgba(255,255,255,0.25)",
    }}>
      Demo: beliebige E-Mail + mind. 4 Zeichen Passwort
    </div>

    {/* Divider */}
    <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "24px 0" }}/>

    {/* Footer */}
    <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
      © 2026 NexusHR · DSGVO-konform · Made in Germany
    </div>
  </div>
</div>
```

);
}
