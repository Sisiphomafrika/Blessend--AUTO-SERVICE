<template>

  <div class="banner">
    <a href="#">
      <img src="http://fgmlandscaping.com/communities/4/000/001/775/944//images/10100900_426x192.png" alt="" />
    </a>
    <a href="#">
      <img src="http://fgmlandscaping.com/communities/4/000/001/775/944//images/10206697.png" alt="" />
    </a>
  </div>
<div>
  <h1>Hop Haven Brews: Emphasizing Tastefulness</h1>
<p>Hop Haven Brews is a craft beer brewery dedicated to creating exceptional brews that tantalize the taste buds of beer enthusiasts. Our commitment to quality ingredients and meticulous brewing processes ensures that every sip of Hop Haven beer is a delightful experience.</p>
<div class="highlight">
  <h2>Craftsmanship and Quality</h2>
  <p>At Hop Haven Brews, we take pride in our craftsmanship and dedication to quality. Our brewmasters are passionate about creating unique and flavorful beers that stand out in the market. We use only the finest ingredients, including locally sourced hops and malt, to ensure that every batch of beer meets our high standards. Our attention to detail and commitment to quality control result in consistently delicious beers that our customers love.</p>
</div>
<div class="highlight">
  <h2>Variety and Innovation</h2>
  <p>Hop Haven Brews offers a wide range of beer styles to cater to diverse tastes. From light and refreshing lagers to rich and complex stouts, our lineup has something for everyone. We are constantly experimenting with new flavors and brewing techniques to push the boundaries of traditional beer styles. Our innovative approach to brewing ensures that our customers are always treated to exciting new flavors and experiences.</p>
</div>
<div class="highlight">
  <h2>Community and Sustainability</h2>
  <p>At Hop Haven Brews, we believe in giving back to the community and protecting the environment. We source our ingredients locally whenever possible, supporting local farmers and businesses. We also strive to minimize our environmental impact by implementing sustainable brewing practices, such as water conservation and waste reduction. By choosing Hop Haven Brews, customers can feel good knowing that they are supporting a brewery that cares about its community and the planet.</p>
</div>
<a href="#" class="button">Experience the Tastefulness of Hop Haven Brews</a>

<p>Thank you for considering Hop Haven Brews.</p>


  </div>


  <div class="footer">
    <span class="name">Hop Haven Brews</span>
    <ul></ul>
    <span class="social-media">
      <a href="#" class="fa fa-facebook-square"></a>
      <a href="#" class="fa fa-twitter-square"></a>
    </span>
    <span class="copyright">Copyright © 2024, Hop Haven Brews.</span>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Courgette);
@import url(https://fonts.googleapis.com/css?family=Amaranth);
@import url(https://fonts.googleapis.com/css?family=Muli);
@import url("https://fonts.googleapis.com/css?family=Cookie");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.3/fotorama.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* set body dimension and background */
body { 
  min-width: 960px;
  max-width: 960px;
  margin: 5px auto 5px auto;
  background-color: white; 
}

/* header is block */
.header { 
  display: block;
}

/* Add your CSS rules based on the instructions in comments. */

/* user-group links and quick-access links share the row */
/* TODO - use inline-block and width 55% */
.user-group {
  display: inline-block;
  width: 55%;
}

/* TODO - use inline-block and width 40% */
.quick-access {
  display: inline-block;
  width: 40%;
  
  /* quick-access links align to the right */  
  text-align: right;
}

/* user group links share the row among themselves */
/* TODO - use inline-block */
/* TODO - add left and right padding each 5px */
/* TODO - add right border as seperation bar with color steelblue */
.user-group > li {
  display: inline-block;
  padding: 0 5px 0 5px;
   border: 1px solid steelblue;
  border-width: 0 1px 0 0;
}

/* remove last bar */
/* TODO - set border width 0 */
.user-group > li:last-child {
  border-width: 0;
}

/* control the style of link texts */
/* TODO - set text color steelblue and font-size 75% */
.user-group > li > a {
  
  /* set font type */
  color: darkblue;
  font-size: 75%;
  font-family: Muli;
  /* remove underlie from links */
  text-decoration: none;
}

/* quick-access links share the row among themselves */
/* TODO - use inline-block */
/* TODO - add left and right padding each 5px */
/* TODO - add right border as seperation bar with color grey */
.quick-access > li {
  display:inline-block;
  padding: 0 5px 0 5px;
  border: 1px solid grey;
  border-width: 0 1px 0 0;
}

/* remove last bar */
/* TODO - set border width 0 */
.quick-access > li:last-child {
  border-width: 0;
}

/* control link style */
/* TODO - set text color and font-size */  
.quick-access > li > * {
  color: darkblue;
  font-size: 68%;
  /* set font type */
  font-family: Muli;
  /* remove underlie from links */
  text-decoration: none;
}

/* banner is another row itself */
/* TODO - set display block and margin 20px top/bottome and 10px left/right */
.banner { 
  display: inline-block;
  margin: 20px 10px 20px 10px;
  
}

/* two links/images inthe banner share the row */
/* TODO - use inline block */
.banner > a { 
  display: inline-block
    
}

/* TODO - set first logo width 30% and 2nd 66% */
.banner > a:nth-child(1)  {
  width: 30%;
}
.banner > a:nth-child(2)  { 
  width: 66%;
}

/* TODO - set display block for image since it is the only child and does NOT share the row with anyone under its parent. */
.banner > a > img {
  display: inline-block;
}
.banner>a2{
  padding: 200px;
  
}
.banner>a3{
  color:green;
  font-size: 30px;
  padding:800px;
  
}
  .quick-access> sli {
    color: darkgreen;    
    font-size: 25px;      
  }

/*Navbar */
* { padding: 0; margin: 0; }
body { background-color: white; }
.menu {  
  /* Use display: block, since it will have the whole row for itself. */
  display: block;
  height: auto;
  background-color: darkgreen;
  text-align:center;
}

.menu > li {
  display: inline-block;
  width: auto;
  height: auto;
  padding: 15px;
}
.menu > li:hover {
  color: darkblue;
  background-color: lightgreen;
}


/* Select the span tag to control the color of the top level menu item. Notice, the text is inside of the span tag. */
.menu > li > span {
  /* Use display: inline; without width and height value since they have no effects on inline element. Inline elements's width and height is controlled by browsers. */
  display: inline;
  color: white;
  font-family:Amaranth;
 font-size:20px;
  padding:71px;
}

.menu > li > a {
  display: inline;
  color: white;
  font-family:Amaranth;
 font-size:20px;
  text-decoration:none;
  padding:71px;
}
.menu > li:hover > span {
  color: darkblue;
}
.menu > li:hover > a {
  color: darkblue;
}

/* Select 2nd level menu using path selector */
.menu > li > ul {
font-family:Amaranth;
 font-size:18px;
  display: none;
}

/* Here is how to do dropdown menu */
/* Step 1 - set 1st level menu item position relative, so 2nd level menu position can be relative to it. */
.menu > li {
  position: relative;
}

/* 2nd level menu */
.menu > li:hover > ul {
  display: block;
  background-color: lightgreen;
  color: darkblue;
  width:241px;
  z-index:30;
  
  /* Step 2 - set 2nd level menu position absolute, so it's position is relative to 1st level menu position, only when 1st level menu position is NOT static (relative or absolute) */
  position: absolute;
  
  /* further use top and left (bottome/right) to control exact position */
  top: 3em;
  left: 0;
}

/* TODO - Align 2nd menu to the right edge of 1st level menu */
.menu > li:last-child:hover > ul {
  left: auto;
  right: 0;
  /* TODO - set left to be auto */
  /* TODO - set right to be 0 to align on right edge */
}

.menu > li > ul > li {
  padding: 0.5em;

  /* remove bullets in front of list items */
  list-style: none;
}

.menu > li > ul > li > a {
  color: darkblue;
  
  /* remove underline of links */
  text-decoration: none;
  
  /* prevent link text from wrapping up to multiple lines */
  white-space: nowrap;
}

/* words*/
h1{
 color:darkblue;
 font-size: 40px;
 text-align:center;
 line-height: 100px;
 font-family:Courgette;
}
.words{
  font-family:Muli;
}
.words>h2{
  color:darkblue;
  line-height:60px
}
.words>ul{
  color:grey;
 
}
.words>li{
  color:grey;
   line-height:30px;
}


.fotorama{
  display: block;
  width: 600px;
  margin: 0 auto;
}

/*footer*/
* { margin: 0; padding: 0; box-sizing: border-box; }

.footer {
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: black;
  background-image: url("http://extensionreforms.dacnet.nic.in/images/9.jpg");
  background-size: contain;
  background-position: top center;
  background-repeat: repeat;  
}


.footer > span {
  display: block;
  color: #dddddd;
  font-family: sans-serif;
}

.footer > span > a {
  color: steelblue;
  text-decoration: none;
}


.footer > .name {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 200%;
  font-family: cookie;
  color:darkblue;
}

.footer > .social-media { margin-bottom: 10px; }
.footer > .social-media > a {
  padding: 0 5px;
  font-size: 38px;
  color:darkblue;
}


.footer > .copyright { font-size: 60%; }


.footer > .quick-access > a {
  border-right: 1px solid ;
  padding: 0 1em;
  font-size: 60%;
  
}
.footer > .quick-access > a:last-child { border: 0; }
.footer>ul{
  color:darkblue;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
  }

  h1 {
    color: #333;
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .highlight {
    background-color: #f9f9f9;
    border-left: 4px solid #333;
    margin: 10px 0;
    padding: 10px 20px;
  }

  .button {
    background-color: #333;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 20px 0;
    border-radius: 4px;
  }

  .button:hover {
    background-color: #555;
  }
 


</style>