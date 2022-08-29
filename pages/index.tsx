import Head from 'next/head'

import styles from '../styles/Home.module.css'

import AuthRequired from '../lib/state/authentication/access/AuthRequired';
import { useAuth } from '../lib/state/authentication/AuthContext';

import IndexConnected from './#';
import IndexDisconnected from '../lib/state/authentication/access/DisconnectedIndex';
import { Theme } from '../lib/state/theme/ThemeContext';

import { Layout } from '../components/Modules/layout';
import Footer from '../components/Modules/layout/Footer';


export default function Home(): JSX.Element {

  const { authUser } = useAuth();
  console.log(authUser);

  return authUser ? (
      <Layout>
          <AuthRequired>
              <IndexConnected theme={<Theme />} />
          </AuthRequired>
      </Layout>
  ) : (
      <Layout>
          <IndexDisconnected />
      </Layout>
  )
  

  //return <Footer />

}
