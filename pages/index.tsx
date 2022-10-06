import React from 'react';
import withoutAuth from '../components/containers/auth/withoutAuth';
import UnAuthIndex from '../components/containers/auth/Index/UnAuthIndex';

export default withoutAuth(function Home(): JSX.Element {
          return <UnAuthIndex />
})
