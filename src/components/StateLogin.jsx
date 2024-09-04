import { useState } from "react";

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      email: '',
      password: '',
    });
  };

  const handleInputChange = (identifier, value) => {
    setValues(prevState => ({
      ...prevState,
      [identifier]: value,
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={values.email} onChange={(e) => handleInputChange('email', e.target.value)}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={values.password} onChange={(e) => handleInputChange('password', e.target.value)}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button type="button" className="button">Login</button>
      </p>
    </form>
  );
}
