import { useNavigate } from 'react-router-dom';
import "../assets/styles/AccountPage.css";

export const SignIn = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
      };

    return (
        <form >
        <div className="form-group">
        <label htmlFor="email">Email:  </label>
          <input type="email" placeholder="Email" />
          </div>
              <div className="form-group">
          <label htmlFor="password">Password:  </label>
          <input type="password" placeholder="Password" />
          </div>
          <button type="submit" onClick={handleBack}>Proceed</button>
        </form>
        );
  };