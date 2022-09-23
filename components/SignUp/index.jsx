import React from 'react';
import Alert from '../Alert/Index';
import { useAuth } from '../../lib/auth/AuthContext';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import Link from 'next/link';


export default function SignUp() {
  const { createUser } = useAuth();
  const { handleSubmit } = useForm();
  const [error, setError] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');


  async function subscribe() {
    if(!email) return setError('Merci de rentrer un email valide');
    if(!password) return setError('Merci de rentrer un mot de passe valide');
    if(!confirmPassword) return setError('Merci de confirmer votre mot de passe') 
    if (confirmPassword !== password) return setError('Vos mots de passe ne sont pas identiques');

    try {
      setError('');
      await createUser(email, password);
      Router.push('/auth/signup/process');
    } 
    catch (err) {
      setError(err.message);
    }
  }

  return (
      <div className="w-full max-w-xs">
          <form onSubmit={handleSubmit(subscribe)} className="form">
              <label className="label">
                  Email
                  <input
                      className="input"
                      autoComplete="email"
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={evt => setEmail(evt.target.value)}
                  />
              </label>
              <label className="label">
                  Mot de passe
                  <input
                      className="input"
                      id="current-password"
                      autoComplete="current-password"
                      type="password"
                      placeholder="mot de passe"
                      value={password}
                      onChange={evt => setPassword(evt.target.value)}
                  />
              </label>
              <label className="label">
                  Confirmez le mot de passe
                  <input
                      className="input"
                      id="confirm-current-password"
                      autoComplete="confirm-current-password"
                      type="password"
                      placeholder="mot de passe"
                      value={confirmPassword}
                      onChange={evt => setConfirmPassword(evt.target.value)}
                  />
              </label>
              <button type="submit" className="button-submit">
                  <Link href="/auth/signup/process">
                      Inscription
                  </Link>
              </button>
          </form>
          {error ? <Alert severity="error">{error}</Alert> : null}
      </div>
  ) 
}