import Orders from './#/orders';
import AuthRequired from '../lib/state/authentication/access/AuthRequired';


export default function (): JSX.Element {
    //must be logged to acces page
    return (
        <AuthRequired>
            <Orders />
        </AuthRequired>
    )
}
