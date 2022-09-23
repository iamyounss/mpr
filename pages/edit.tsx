import { Layout } from "../components/Layout";
import withAuth from "../lib/auth/withAuth";

export default withAuth(function AuthenticateUser(): JSX.Element {

    return (
        <Layout>
            <div>hello world</div>
        </Layout>
    )
})


