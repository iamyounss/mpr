import React from 'react';
import Link from 'next/link';
import Alert  from '../Alert/Index';
import { auth } from '../../config/firebase';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../lib/auth/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function SignIn() {

  const router = useRouter();
  const { handleSubmit } = useForm();
  const { setAuthenticated } = useAuth();
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function connector() {
    if(!email) return setError('Merci de rentrer un email valide');
    if(!password) return setError('Merci de rentrer un mot de passe valide'); 

    try {
      setError('')
      
      await signInWithEmailAndPassword(auth, email, password);

      const response = await fetch('/api/signin', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.status === 200) {
        setAuthenticated(true);
      } else {
        console.error('Login error', response);
      }


      router.replace('/edit')
    } 
    catch (err) {
      setError(err.message);
    }
  }

  return (
      <div className="w-full h-screen flex items-center justify-center max-w-lg">
          <form onSubmit={handleSubmit(connector)} className="form">
              <input
                  id="email"
                  className="input"
                  autoComplete="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={evt => setEmail(evt.target.value)}
              />

              <input
                  id="current-password"
                  className="input"
                  autoComplete="current-password"
                  type="password"
                  placeholder="mot de passe"
                  value={password}
                  onChange={evt => setPassword(evt.target.value)}
              />
              {/* should redirect to blog page app documentation
           TODO: create static blog documentation page */}

              <span className=" text-right my-2">
                  <Link href="/">Mot de passe oublié ?</Link>
              </span>

              <button type="submit" className="items-center">
                  Connexion
              </button>

              <span>
                  Nouveau ? <Link href="/auth/signup"> Créer un compte</Link>
              </span>
          </form>
          {error ? <Alert severity="error">{error}</Alert> : null}
      </div>
  ) 
  
  
}