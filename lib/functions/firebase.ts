import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
    CollectionReference,
    DocumentData,
    
} from 'firebase/firestore'
import { database } from '../../config/firebase';
import { UsersData, BookingData, DriversData } from '../../typescript/interfaces';


// helper to add the type to the db responses
/**
 * 
 * @param collectionName  Collection Table you want from firestore database
 * @returns the collection for any CRUD operations
 */
const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(database, collectionName) as CollectionReference<T>
  }


/**
 * @params require all Drivers interface data
 * @returns the table you want
 */
export const driversCollection = createCollection<DriversData>('drivers');
/**
 * @params require all Users interface data
 * @returns the table you want
 */
export const usersCollection = createCollection<UsersData>('users');
/**
 * @params require all its interface data
 * @returns the table you want
 */
export const bookingCollection = createCollection<BookingData>('booking');




 /**
  * set data on database, if it not exist it will create it
 * @param collection is the firestore collection you choose
 * @param userData access the user data in database
 */
export const setUserData = async (
    collection: CollectionReference,
    userData: DriversData,
) => {
    const userRef = doc(collection, userData?.id)
    await setDoc(userRef, userData)

}

 /**
  * read data on database 
 * @param collection is the firestore collection you choose
 * @param userData access the user data in database
 */
export const readUserData = async (
    collection: CollectionReference, 
    id: string,
) => {

    const userRef = doc(collection, id)
    const ref = await getDoc(userRef)

    return ref.data();
}


 /**
  * update data on database, if it not exist it will return an error
 * @param collection is the firestore collection you choose
 * @param userData access the user data in database
 */
export const updateUserData = async (
    collection: CollectionReference,
    userData,
) => {

    const userRef = doc(collection, userData?.id)
    await updateDoc(userRef, userData)
  }

