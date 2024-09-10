import { useState } from "react";

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password !== "";

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
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }))
  };

  const handleInputBlur = (identifier) => {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onBlur={() => handleInputBlur('email')}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email!</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onBlur={() => handleInputBlur('password')}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button type="button" className="button">Login</button>
      </p>
    </form>
  );
}
