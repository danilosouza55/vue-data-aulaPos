<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mr-5">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">
            <span class="fa fa-home"></span
          ></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users"
            ><span class="fa fa-user"></span
          ></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
