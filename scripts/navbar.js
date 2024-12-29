let navbar = () => {
  let card = `<div id= "nav-container">
    <a id="logo" href="">My Personal App</a>
     <div id="navlinks>
    <a href="#"></a>
     <a href="signup.html">SignUp</a>
     <a href="login.html">Login</a>
     <a href="todos.html">Todos</a>
      <a href="expences.html">Expences</a>
      </div>
    </div>`
  document.getElementById("nav").innerHTML = card;

};
navbar()
