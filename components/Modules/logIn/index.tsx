import React from 'react';
import Alert  from '../../Base/Alert/Index';
import { useAuth } from '../../../lib/state/authentication/AuthContext';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface logIn {
  email?: string,
  password?: string,
}

export default function login() {
  const router = useRouter();
  const { logIn } = useAuth();
  const { handleSubmit } = useForm<logIn>();
  const [error, setError] = React.useState<string>();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  async function connector() {
    if(!email) return setError('Merci de rentrer un email valide');
    if(!password) return setError('Merci de rentrer un mot de passe valide'); 

    try {
      setError('')
      await logIn(email, password);
      router.push('/#');

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
                  Nouveau ? <Link href="/subscribe"> Créer un compte</Link>
              </span>
          </form>
          {error ? <Alert severity="error">{error}</Alert> : null}
      </div>
  ) 
  
  
}