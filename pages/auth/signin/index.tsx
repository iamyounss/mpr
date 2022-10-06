import SignIn from '../../../components/containers/auth/SignIn';
import withoutAuth from '../../../components/containers/auth/withoutAuth';

export default withoutAuth( function Home(): JSX.Element {
    return <SignIn />
})
