import React from 'react';
import { useAuth } from './AuthContext';
import { Layout } from '../../components/Layout/index';


export default function AuthRequired({ children }) {
      return <Layout>{children}</Layout>
}
