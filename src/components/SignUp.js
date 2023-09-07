import { useNavigate } from 'react-router-dom';
import "../assets/styles/AccountPage.css";

export const SignUp = () => {
const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
      };

      return (
<form>
        <div className="form-group">
        <label htmlFor="firstname">First Name:  </label>
        <input type="firstname" placeholder="ex. Juan" />  
        </div>
         <div className="form-group">
         <label htmlFor="lastname">Last Name:  </label>
        <input type="lasttname" placeholder="ex. Delos Santos" /> 
        </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email:  </label>
          <input type="email" placeholder="ex. JuanDelosSantos101@gmail.com" />
          </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password:  </label>
          <input type="password" placeholder="ex. p@ssword" />
          </div>
            <div className="form-group">
                <label htmlFor="gcashnumber">GCASH Number:  </label>
          <input type="gcashnumber" placeholder="GCASH Number" />
          </div>
          <button type="submit"onClick={handleBack}> Proceed</button>
</form>
);
};