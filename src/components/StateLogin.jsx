import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !isEmail(values.email) && !isNotEmpty(values.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(values.password, 6);

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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={values.email}
          onBlur={() => handleInputBlur('email')}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={emailIsInvalid && "Please enter a valid email!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={values.password}
          onBlur={() => handleInputBlur('password')}
          onChange={(e) => handleInputChange('password', e.target.value)}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button type="button" className="button">Login</button>
      </p>
    </form>
  );
}
