import { driversCollection } from "../../lib/functions/firebase"
import { doc, getDoc } from 'firebase/firestore';
import { ApolloError, ValidationError } from "apollo-server-micro";
import { Driver } from "../../typescript/interfaces";

export const DriversResolvers = {
    Query: {
        /**
         * resolve the driver data using the drivers id
         * on firestore drivers table
         */
        async driver(_: null, args: {id: string}) {
            try{

                const driverDocument = doc(driversCollection, args.id)
                const getter = await getDoc(driverDocument)         
                const driver =  getter.data() as Driver | undefined
                
                return driver || new ValidationError('driver ID not found')
            } catch(error){
                throw new ApolloError(error);
            }
        }
    }
}