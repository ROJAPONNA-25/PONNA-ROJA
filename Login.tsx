import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the login logic here, for example, making an API request.
    console.log('Logged in with', { username, password, rememberMe });
  };

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                className="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input_user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control input_pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlInline"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="custom-control-label" htmlFor="customControlInline">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="submit" className="btn login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account? <a href="#" className="ml-2">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
