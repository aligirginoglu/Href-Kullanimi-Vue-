<template>
  <div id="app">
    <!-- Header -->
    <header id="header" class="alt">
      <h1>
        <br>
        <strong>
          <router-link to="/">Spatial</router-link>
        </strong> by Templated
      </h1>
      
      <nav id="nav">
        <ul>
          <br>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="generic">Generic</router-link>
          </li>
          <li>
            <router-link to="about">Elements</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <a href="#menu" class="navPanelToggle">
      <span class="fa fa-bars"></span>
    </a>

    <router-view></router-view>
    <footer id="footer">
      <div class="container">
        <ul class="icons">
          <li>
            <a href="#" class="icon fa-facebook"></a>
          </li>
          <li>
            <a href="#" class="icon fa-twitter"></a>
          </li>
          <li>
            <a href="#" class="icon fa-instagram"></a>
          </li>
        </ul>
        <ul class="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design:
            <a href="http://templated.co">TEMPLATED</a>
          </li>
          <li>
            Images:
            <a href="http://unsplash.com">Unsplash</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  components: {},
  name: "player",
  data() {
    return {};
  }
};
</script>
