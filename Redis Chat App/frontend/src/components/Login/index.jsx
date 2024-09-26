import { Toast } from "react-bootstrap";
import React, { useState, useRef } from "react";
import Logo from "../Logo";
import "./style.css";
import { useEffect } from "react";

const DEMO_USERS = ["Pablo", "Joe", "Mary", "Alex"];

export default function Login({ onLogIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    console.log(username);
    event.preventDefault();
    if (!username) {
      setError("Please select a username.");
      return;
    }
    onLogIn(username, password, setError);
  };

  return (
    <div className="login-form text-center login-page">
      <div
        className="rounded"
        style={{
          boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03)",
          maxWidth: 500,
        }}
      >
        {/* Top-left heading with image */}
        <div style={{ position: "absolute", top: "20px", left: "20px", display: "flex", alignItems: "center", color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
          <img
            src={`${process.env.PUBLIC_URL}/devzero-logo-small.svg`}
            alt="Redis Logo"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          Redis Chat Demo
        </div>
        <form
          className="text-left px-4"
          style={{
            paddingTop: 18,
            minWidth: 500,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#1e2937',
            border: '1px solid #4a5568',
          }}
          onSubmit={onSubmit}
        >

          {/* Welcome Text and Image Section */}
          <div
            className="text-center"
            style={{
              marginBottom: 20,
              paddingBottom: 20,
              borderBottom: '1px solid #4a5568',
            }}
          >
            <h4 style={{ color: 'white', marginBottom: 20, marginTop: 6 }}>Welcome Back!!</h4>
            <div
              style={{
                width: "100%",
                height: "170px",
                background: "linear-gradient(to bottom right, #101826, #000000, #1f2835)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/devzero-logo.svg`}
                alt="Redis Logo"
                style={{ width: "270px", height: "270px", marginRight: "10px" }}
              />
            </div>
          </div>

          <label className="font-size-12" style={{
            color: '#E2E8F0', marginBottom: '8px', textAlign: 'left',
            display: 'block'
          }}>Name</label>

          <div className="username-select mb-3">
            <UsernameSelect
              username={username}
              setUsername={setUsername}
              names={DEMO_USERS}
            />
          </div>

          <label htmlFor="inputPassword" className="font-size-12" style={{
            color: '#E2E8F0', marginBottom: '8px', textAlign: 'left',
            display: 'block'
          }}>
            Password
          </label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            style={{
              backgroundColor: '#1f2937',
              color: '#D1D5DB', 
              borderRadius: '4px',
              border: '1px solid #4a5568',
              padding: '10px',
              marginBottom: '20px',
            }}
          />
          <div style={{ height: 7 }} />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            style={{
              background: 'linear-gradient(to right, #4c6ef5, #3b82f6)', 
              border: 'none',
              padding: '12px 0', 
              borderRadius: '4px', 
              color: 'white', 
              fontWeight: 'medium',
              fontSize: '14px', 
              cursor: 'pointer',
              textAlign: 'center',
              width: '100%',
              transition: 'background 0.3s ease', 
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #3b82f6, #4c6ef5)'; 
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #4c6ef5, #3b82f6)'; 
            }}
          >
            Sign in
          </button>
          <div className="login-error-anchor">
            <div className="toast-box">
              <Toast
                style={{ minWidth: 277 }}
                onClose={() => setError(null)}
                show={error !== null}
                delay={3000}
                autohide
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{error}</Toast.Body>
              </Toast>
            </div>
          </div>
          <div style={{ height: 30 }} />
        </form>
      </div>
    </div>
  );
}

const UsernameSelect = ({ username, setUsername, names = [""] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      tabIndex={0}
      ref={ref}
      className={`username-select-dropdown ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: '#1f2937',
        color: '#D1D5DB',
        border: '1px solid #4a5568',
        padding: '10px',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Display selected username or placeholder */}
      <div className="username-select-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{username ? username : "Select your name"}</div>
        <div>
          <svg width={24} height={24}>
            <path d="M7 10l5 5 5-5z" fill="#D1D5DB" />
          </svg>
        </div>
      </div>

      {/* Dropdown list */}
      {open && (
        <div
          style={{
            width: '100%',
            backgroundColor: '#1f2937',
            border: '1px solid #4a5568',
            borderRadius: '4px',
            position: 'absolute',
            zIndex: 1000,
            maxHeight: '150px',
            overflowY: 'auto',
            marginTop: '5px',
          }}
          className={`username-select-block ${open ? "open" : ""}`}
        >
          {names.map((name) => (
            <div
              className="username-select-block-item"
              key={name}
              onClick={() => {
                setUsername(name);
                setOpen(false);
              }}
              style={{
                padding: '10px',
                color: '#D1D5DB',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d3748')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};