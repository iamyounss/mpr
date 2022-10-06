import { Layout } from "../components/base/Layout";
import withAuth from "../components/containers/auth/withAuth";

export default withAuth(function AuthenticateUser(): JSX.Element {

    return (
        <Layout>
            <div>hello world</div>
        </Layout>
    )
})


