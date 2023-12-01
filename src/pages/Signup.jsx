import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="login-form">
      <h1>EZRA Seminary</h1>
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>

        <label>Email:</label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={isLoading}>SignUp</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;