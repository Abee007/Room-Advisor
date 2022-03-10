import React from "react";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { clientIp, cryptoKey } from "../constants";
import { sha256 } from "js-sha256";

function CheckUserExists({ user }) {
  // Collection ref
  const usersCollectionRef = collection(db, "Users");

  const validateUser = async (user) => {
    //Hash netId with stored cryptoKey
    const hash = sha256.hmac(cryptoKey, user.id);

    //Query
    const q = query(usersCollectionRef, where("netId", "==", hash));

    //Get data
    const data = await getDocs(q);
    var valid = false;
    data.forEach((doc) => {
      if (hash === doc.data().netId) valid = true;
    });

    if (valid) {
      window.open(`${clientIp}/viewreviews`, "_self");
    } else {
      window.open(`${clientIp}/register`, "_self");
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
