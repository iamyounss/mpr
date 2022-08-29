import React from 'react';
import Alert from '../../Base/Alert/Index';
import { useAuth } from '../../../lib/state/authentication/AuthContext';
import { useForm } from 'react-hook-form';

interface Register {
  email?: string,
  password?: string,
  confirmPassword?: string,
}

export default function Register() {
  const { createUser } = useAuth();
  const { handleSubmit } = useForm<Register>();
  const [error, setError] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');


  async function subscribe() {
    if(!email) return setError('Merci de rentrer un email valide');
    if(!password) return setError('Merci de rentrer un mot de passe valide');
    if(!confirmPassword) return setError('Merci de confirmer votre mot de passe') 
    if (confirmPassword !== password) return setError('Vos mots de passe ne sont pas identiques');

    try {
      setError('');
      await createUser(email, password);
    } 
    catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit(subscribe)} className="form">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
          <input
            className="input"
            autoComplete="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(evt) =>
              setEmail(evt.target.value)
            }
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mot de passe
          <input
            className="input"
            id="current-password"
            autoComplete="current-password"
            type="password"
            placeholder="mot de passe"
            value={password}
            onChange={(evt) =>
              setPassword(evt.target.value)
            }
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Confirmez le mot de passe
          <input
            className="input"
            id="confirm-current-password"
            autoComplete="confirm-current-password"
            type="password"
            placeholder="mot de passe"
            value={confirmPassword}
            onChange={(evt) =>
              setConfirmPassword(evt.target.value)
            }
          />
        </label>
          <button type="submit">
            Inscription
          </button>
      </form>
      {error ? <Alert severity="error">{error}</Alert> : null}
    </div>
  ); 
}