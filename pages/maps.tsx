import Maps from './#/maps';
import AuthRequired from '../lib/state/authentication/access/AuthRequired';

export default function (){
    //must logged to access this page
    return (
        <AuthRequired>
            <Maps />
        </AuthRequired>
    )
}
