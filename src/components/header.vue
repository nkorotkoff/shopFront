<script>
export default {
  components: {},
};
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="header-left">
            <div class="menu">
              <ul class="nav" id="nav">
                <li><a href="">Shop</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Experiance</a></li>
                <li><a href="">Company</a></li>
                <li><a href="">Contact</a></li>
                <div class="clear"></div>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          <div class="header_right">
            <div class="header_icons">
              <v-icon class="header_basket" icon="mdi-basket-outline" />
              <v-icon class="header_basket" icon="mdi-account " />
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
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
  padding: 1.5% 0;
}
.header-left {
  float: left;
  width: 59%;
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
.toggleMenu {
  display: none;
  padding: 4px 5px 0px 5px;
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
  float: right;
  width: 6%;
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
  margin-left: 100%;
}
</style>
