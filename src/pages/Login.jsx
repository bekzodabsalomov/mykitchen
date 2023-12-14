
function Login() {
  return (
    <div className="forms">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input ref={email} type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input ref={password} type="password" />
        </label>
        <button>Login</button>
      </form>
      <p>
        If you don't have account, please <a href="signup">Signup</a>
      </p>
    </div>
  )
}

export default Login