import React from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

function CheckUserExists({ user }) {
  const usersCollectionRef = collection(db, "Users");

  const validateUser = async (user) => {
    const data = await getDocs(usersCollectionRef);
    var valid = false;
    data.forEach(function (doc) {
      // console.log(doc.id, " => ", doc.data());
      if (user.id === doc.data().netId) {
        valid = true;
      }
    });
    console.log(valid);

    if (valid) {
      window.open("https://room-advisor-v0.web.app/viewreviews", "_self");
    } else {
      window.open("https://room-advisor-v0.web.app/register", "_self");
    }

    //Pushes users to database
    // const userPush = {
    //   'netId': user.id,
    //   'year': 1
    // };
    // await addDoc(usersCollectionRef, userPush);

    //Get users from database
    // const data = await getDocs(usersCollectionRef);
    // setValid(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    // const arr = data.docs;
    // for(a of arr) {
    //   console.log(a);
    // }

    console.log("ValidateUser");
  };

  return <div>{validateUser(user)}</div>;
}

export default CheckUserExists;
