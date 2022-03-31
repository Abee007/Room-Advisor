import "./RegisterPage.css";
import React, { useState, useEffect } from "react";
import { getAllCollegeNames, collegesToCode } from "../utils/colleges";
import { useNavigate } from "react-router-dom";
import { cryptoKey } from "../constants";
import { sha256 } from "js-sha256";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { clientIp } from "../constants";
import Nav from "../components/Nav";
import Select from 'react-select'
import Button from '../components/Button'
import GuidelinesList from "../components/GuidelinesList";
import { colleges } from '../components/data.ts';
import agreement from '../static/agreement.svg';

function RegisterPage({ user }) {
  const [isLoading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    console.log('test')
    setChecked(!checked);
  };

  useEffect(() => {
    // Get all colleges to be displayed
    const internalColleges = getAllCollegeNames();
    if (internalColleges.length === 14) {
      setColleges(internalColleges);
      setLoading(false);
    }
  }, []);

  const uploadUser = async (userObject) => {
    // Collection ref
    const usersCollectionRef = collection(db, "Users");

    //Add User to firebase database
    await addDoc(usersCollectionRef, userObject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      netId: sha256.hmac(cryptoKey, user.id),
      meta: {
        classYear: event.target.year.value,
        college: collegesToCode(event.target.college.value),
      },
    };
    uploadUser(userObject).then(() => {
      window.open(`${clientIp}/viewreviews`, "_self");
    });
  };

  if (isLoading) {
    return <div className="App">Loading Register...</div>;
  }

  return (
    <div>
      <Nav user={undefined} mode={"TRUNCATED"} />

      <div className="page-container">

        <div className="form-container">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h1 className="signup-title"> Tell us a bit about yourself </h1>

            <div className="input-container"> 

              <h1 className="divider-text"> I'm a </h1>

              <select className="form-control" name="year" required>
                <option value="" defaultValue>
                  Class Year
                </option>
                <option value="1">First Year</option>
                <option value="2">Sophomore</option>
                <option value="3">Junior</option>
                <option value="4">Senior</option>
              </select>

              <h1 className="divider-text"> in </h1>

              <select className="form-control" name="college" required>
                <option value="" defaultValue>
                  Residential College
                </option>
                {colleges.map((college) => (
                  <option value={college}>{college}</option>
                ))}
              </select>

            </div>

            <h2 className="signup-title"> 
              Community Guidelines
            </h2>
            
            <h3 className="sub-text">
              This anonymous platform lets you review a room on campus you are
              currently living in or have lived in the past. Individual
              identities associated with reviews will not be displayed or kept
              in our records. The information you provide will help build a
              collective database of room reviews for the future.
            </h3>

            <div className="divider-block"> </div>

            <div className="community-guidlines-container">

                <h3 className="sub-text">
                  I understand that his platform is only for reviewing the quality of the physical room and that this is no place for rants irrelevant to the room itself. I therefore agree that
                </h3>
                <GuidelinesList></GuidelinesList>

            </div>

            <div className="checkbox-container">
              <label className="checkbox-text">
                <input className="check-box" type="checkbox" checked={checked} onChange={handleChange}/>
                By checking this box you agree to our community guidelines.
              </label>
              {/* testing if the checkbox is functional */}
              <p>Is "Checkbox" checked? {checked.toString()}</p>
            </div>
            
            <button buttonStyle='btn--primary' buttonSize='btn--large' className="register-button" disabled={checked !== true} type="submit">
              Register
            </button>
          </form>

        </div>
        
        <div className="image-container">
          <img className="illustration" src={agreement} alt='Agreement' />
        </div>
      
      </div>

    </div>
  );
}

export default RegisterPage;