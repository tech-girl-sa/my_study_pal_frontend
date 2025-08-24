import classes from './Signup.module.css'


function Signup(){

    return(
        <div class={classes.signupContainer}>
    <h1>Create Your Study Pal Account</h1>
    <form class={classes.signupForm}>
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />

      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password" required />

      <button type="submit">Create Account</button>
      <p class={classes.loginLink}>Already have an account? <a href="#">Log in</a></p>
    </form>
  </div>
    )
};

export default Signup;