import React, { useState } from 'react'
import SignUpProcess from '../../../components/SignUp/SignUp.process'
import {useRouter} from 'next/router';
import {
    setUserData,
    driversCollection,
    readUserData,
} from '../../../lib/functions/firebase';
import { auth } from '../../../config/firebase';

 
export default function onSignUpProcess(){

/**
 * create user data on firebase database
 */

const router = useRouter();

// default value must be The firstname on db
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [companyName, setCompanyName] = useState('');



/**
 * 
 * will create a data with useStates value from input form
 * @value firstname
 * @value lastname
 * @value email 
 * @value company name
 */
const handleCreateData = (event) => {
   /**
    * TODO:
    * input cant be empty 
    */
   
    event.preventDefault();

    setUserData(driversCollection, {
        lastname: lastname,
        firstname: firstname,
        id: auth.currentUser.uid,
        email: email,
        serviceType: 'driver',
        driverType: 'taxi'
    })

    // bugs 
    /**
     * when you are on auth/signup/process 
     * it render the logged navbars, it should not
     * it need to redirect to the logged home page directly after submit to db
     */
}

  return (
      <SignUpProcess
          handleCreateData={handleCreateData}
          firstname={firstname}
          lastname={lastname}
          email={email}
          companyName={companyName}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setEmail={setEmail}
          setCompanyName={setCompanyName}
      />
  )
}
