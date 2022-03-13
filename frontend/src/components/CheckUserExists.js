import React, { useState, useEffect } from 'react'
import { db } from '../utils/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'

function CheckUserExists ({ user }) {
  const usersCollectionRef = collection(db, 'Users')

  const validateUser = async (user) => {
    const data = await getDocs(usersCollectionRef)
    let valid = false
    data.forEach(function (doc) {
      // console.log(doc.id, " => ", doc.data());
      if (user.id === doc.data().netId) {
        valid = true
      }
    })
    console.log(valid)

    if (valid) {
      window.open('http://localhost:3000/viewreviews', '_self')
    } else {
      window.open('http://localhost:3000/register', '_self')
    }

    // Pushes users to database
    // const userPush = {
    //   'netId': user.id,
    //   'year': 1
    // };
    // await addDoc(usersCollectionRef, userPush);

    // Get users from database
    // const data = await getDocs(usersCollectionRef);
    // setValid(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    // const arr = data.docs;
    // for(a of arr) {
    //   console.log(a);
    // }

    console.log('ValidateUser')
  }

  return (
    <div>
      {validateUser(user)}
    </div>
  )
}

export default CheckUserExists
