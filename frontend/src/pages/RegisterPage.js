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

function RegisterPage({ user }) {
  const [isLoading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [level, setLevel] = useState(0);
  const navigate = useNavigate();

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
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="signup-title"> About you...</h1>
        <select className="form-control" name="year" required>
          <option value="" defaultValue>
            Class Year
          </option>
          <option value="1">First Year</option>
          <option value="2">Sophomore</option>
          <option value="3">Junior</option>
          <option value="4">Senior</option>
        </select>

        <br />

        <select className="form-control" name="college" required>
          <option value="" defaultValue>
            Residential College
          </option>
          {colleges.map((college) => (
            <option value={college}>{college}</option>
          ))}
        </select>

        <div className="community-guidlines-container">
          <div className="resource-rich w-richtext">
            <h2 className="signup-title"> Community Guidelines</h2>
            <br />
            <p className="sub-title">
              {" "}
              Choosing a room just got a lot easier!{" "}
            </p>
            <p>
              Room Advisor is a new platform built by Yale undergrads that
              enables students to share and view reviews of rooms on campus to
              make the housing process less stressful and more transparent.
            </p>
            <p>
              Do you have a loud gym right next to your bedroom? Do you have a
              beautiful view of the courtyard every morning? Share your
              experiences with the community to help people after you make
              better informed decisions!
            </p>
            <p>
              This anonymous form lets you review a room on campus you are
              currently living in or have lived in the past. Individual
              identities associated with reviews will not be displayed or kept
              in our records. The information you provide will help build a
              collective database of room reviews for the future.
            </p>
            <p></p>
            <p className="sub-title">Community Guidelines:</p>
            <div className="bullet-list" role="list">
              <li>Treat others online as you would treat them in real life</li>
              <li>
                Be tolerant towards other’s viewpoints; respectfully disagree
                when opinions do not align
              </li>
              <li>
                Respect the privacy and personal information of other alumni
              </li>
              <li>Communicate with courtesy and respect</li>
            </div>
            <p className="sub-title">Please:</p>
            <div className="bullet-list" role="list">
              <li>
                Respect: I will not comment on my suite/hall mates. I will not
                name anyone. I will not post pictures of others without consent.
              </li>
              <li>
                Relevance: I understand this platform is only for reviewing the
                quality of the ROOM. This is no place for rants irrelevant to
                the room itself.{" "}
              </li>
              <li>Do not post prejudiced comments or profanity</li>
              <li>
                Do not bully or make inflammatory remarks to other community
                members
              </li>
              <li>
                Inappropriate content: I will not use this platform to engage in
                cyberbullying, harassment, hate speech, or any form of bigotry.{" "}
              </li>
              <li>
                Honesty: I will review the room honestly based on my own
                experience of living in the room.
              </li>
            </div>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setLevel(1)}
          >
            Accept
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => navigate("/logout")}
          >
            Reject
          </button>
        </div>
        <br />
        <button
          disabled={level !== 1}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
