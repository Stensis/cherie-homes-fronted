import { useForm } from '@formspree/react';

function SignupForm() {
  const [state, handleSubmit] = useForm('signupForm');
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <button disabled={state.submitting}>Sign up</button>
    </form>
  )
}
export default SignupForm;