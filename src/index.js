import $ from 'jquery'
import '/css/style.css'

let htmlText = `
<nav>
<img src="images/fccimage.jpeg">
<h1><a href="https://github.com/EduLight-Consulting/roadmap/blob/master/roadmap.md">FreeCodeCamp Ibadan JavaScript Workshop!</a></h1>
</nav>
<div class="main">
  <ul>
  <li>Introduction to Javascript</li>
  <li>The ECMAScript 2015- 2017 Guide
  </li>
  </ul>

  <ul>
	<li>Javascript Lexical Structure</li>
	<li>Javascript Variables</li>
	<li>Javascript Types</li>
	<li>Javascript Expressions</li>
	<li>Javascript Functions</li>
	<li>Javascript Arrow Functions</li>
	<li>Javascript Loops</li>
	<li>Javascript Loops and Scope</li>
	<li>Javascript Arrays</li>
	<li>Javascript Objects</li>
	<li>Javascript Classes</li>
  </ul>

</div>
<footer>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</footer>
`

$('#app').html(htmlText)
