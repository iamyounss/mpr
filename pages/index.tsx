import React from 'react';
import withoutAuth from '../lib/auth/withoutAuth';
import UnAuthIndex from '../containers/Index/UnAuthIndex';

export default withoutAuth(function Home(): JSX.Element {
          return <UnAuthIndex />
})
