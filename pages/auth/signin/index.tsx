import SignIn from '../../../components/SignIn';
import withoutAuth from '../../../lib/auth/withoutAuth';

export default withoutAuth( function Home(): JSX.Element {
    return <SignIn />
})
