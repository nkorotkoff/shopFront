<script>
export default {
  components: {},
};
</script>

<template>
  <div class="header">
          <div class="header-left">
            <div class="menu">
              <ul class="nav" id="nav">
                <li><router-link to="/">Shop</router-link></li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          <div class="header_right">
            <div class="header_icons">
              <router-link to="/basket"
                ><v-icon class="header_basket" icon="mdi-basket-outline"
              /></router-link>
              <router-link to="/login"><p class="text-white">Sign In</p></router-link>
              <router-link to="/register"><p class="text-white">Sign Up</p></router-link>
<!--              <v-icon class="header_basket" icon="mdi-account " />-->
            </div>
          </div>
          <div class="clear"></div>
        </div>

</template>

<style>
.clear {
  clear: both;
}
h4,
h5,
h6,
h1,
h2,
h3 {
  margin-top: 0;
}
ul,
ol {
  margin: 0;
}
p {
  margin: 0;
}
html,
body {
  font-family: "Open Sans", sans-serif;
  background: #fff;
  font-size: 100%;
}
body a {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.header {
  background: grey;
  display: flex;
  align-items: center;
}
.header-left {
  width: 90%;

}
.logo {
  float: left;
  margin-right: 2%;
}
.menu {
  float: left;
}
.menu li {
  display: inline-block;
}
.menu li:first-child {
  margin-left: 0;
}
.menu li a {
  display: block;
  font-size: 0.8125em;
  text-transform: uppercase;
  padding: 5px 20px;
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 600;
}
.menu li a:hover,
.menu li.active a {
  background: #fff;
  color: #000;
}
#nav .current a {
  color: red;
}
.nav:before,
.nav:after {
  content: " ";
  display: table;
}
.nav:after {
  clear: both;
}
.nav ul {
  list-style: none;
}
@media screen and (max-width: 800px) {
  .active {
    display: block;
  }
  .menu li a {
    text-align: left;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
  }
  .nav {
    list-style: none;
    width: 95%;
    position: absolute;
    right: 20px;
    background: #222;
    top: 72px;
    z-index: 111;
  }
  .nav:after {
    content: "";
    position: absolute;
    right: 18px;
    top: -9px;
    border-left: 10px solid rgba(0, 0, 0, 0);
    border-right: 10px solid rgba(0, 0, 0, 0);
    border-bottom: 10px solid #333;
  }
  .menu li a span.messages {
    text-align: center;
    top: 15px;
  }
  .nav li ul {
    width: 100%;
  }
  .menu ul {
    margin: 0;
  }
  .nav > li.hover > ul {
    width: 100%;
  }
  .nav > li {
    float: none;
    display: block;
  }
  .nav ul {
    display: block;
    width: 100%;
  }
  .nav > li.hover > ul,
  .nav li li.hover ul {
    position: static;
  }
  .nav li a {
    border-top: 1px solid #333;
  }
  .nav li:first-child a {
    border-top: none;
  }
}
.header_right {

}

.header_basket {
  color: white;
  margin-left: 15px;
}
i {
  cursor: pointer;
}
.header_icons {
  display: flex;

  align-items: center;
  justify-content: space-between;

}
.header_icons a{
  margin-left: 10px;
}
.header_icons i{
  margin-top:6px;
}

</style>
