 
  return (
    <div className='forms'>
    <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input ref={displayName} type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input ref={email} type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input ref={password} type="password" />
        </label>
        <button>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )


export default Signup