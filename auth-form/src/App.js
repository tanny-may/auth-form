function App() {
  return (
    <div>

      <form>      
        <h1>Login Here</h1>
        <label> E-mail <br></br><input type="email" name="email" placeholder="example@mail.com"/> </label>
        <label> Password <br></br><input type="password" name="password" placeholder="minimum 6 symbols"/> </label>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
