<style type="text/css">

/*** Page ***/

* {
	margin: 0;
	padding: 0;
	border: 0;
	}

body {
	background: rgb(184, 219, 124);
	color: #555555;
	font-size: 12px;
	font-family: Arial, Tahoma, Verdana;
	margin: 20px;
	padding: 0;
	line-height: 20px;
	text-align: center;
	}

li {
	line-height : 150%;
	padding-left: 5px;
	margin-left: 30px;
	}

p {
	padding-top: 5px;
	padding-bottom: 10px;
	}


/*** Tables ***/

table {
	width: 90%;
	margin: 10px;
	border: 1px black solid;
	}

td {
	font-size: 12px;
	font-family: Arial, Tahoma, Verdana;
	padding: 3px;
	}

td.header {
	background: #dddddd;
	font-weight: bold;
	text-align:center;
	}

td.header2 {
	border-bottom: 1px black;
	font-weight: bold;
	text-align:center;
	}


/*** Hyperlinks ***/

a, a:visited {
	color: #008DCF;
	text-decoration: none;
	}
	
a:hover {
	color: #008DCF;
	text-decoration: underline;
	}
	
a img {
	border: none;
	}
	
a:focus, a:hover, a:active {
	outline: none;
	}


/*** Relative Sizes ***/

.Larger5 {
	font-size: 200%;
	}

.Larger4 {
	font-size: 175%;
	}

.Larger3 {
	font-size: 150%;
	}

.Larger2 {
	font-size: 130%;
	}

.Larger1 {
	font-size: 110%;
	}

.Smaller1 {
	font-size: 90%;
	}

.Smaller2 {
	font-size: 80%;
	}

.Smaller3 {
	font-size: 70%;
	}

.Smaller4 {
	font-size: 60%;
	}

.Smaller5 {
	font-size: 50%;
	}


/*** Headlines ***/

h1, h2, h3, h4, h5, h6 {
	color: #333333;
	font-family: Arial, Tahoma, Verdana;
	font-weight: normal;
	text-decoration: none;
	margin: 0 0 5px 0;
	padding: 0;
	}

h1 {
	font-size: 22px;
	border-bottom: 1px dotted #CCCCCC;
	margin: 0 0 10px 0;
	padding: 0 0 5px 0;
	}
	
h2 {
	font-size: 18px;
	border-bottom: 1px dotted #CCCCCC;
	margin: 0 0 10px 0;
	padding: 10px 0px 5px 0;
	}
	
h3 {
	font-size: 15px;
	}
	
h4 {
	font-size: 13px;
	}
	
h5 {
	font-size: 12px;
	}
	
h6 {
	font-size: 11px;
	}


/*** Article Declarations ***/

.Article {
	background: #FFFFFF;
	margin: 20px auto;
	text-align: left;
	padding: 20px;
	width: 750px;
	}

.Article p,ul,dl {
	margin: 0;
	padding: 0 0 5px 0
	}

.Article .h2 {

	}

.Article .h3 {

	}

.Article .MainNavMenu {
	width : 100%;
	font-weight : bold;
	text-align : center;
	padding-top : 3px;
	padding-bottom : 1px;
	background-color: #eeeeee;
	border-bottom : 2px solid #28166F;
	margin-bottom : 0px;
	}

.Article .MainNavLink {
	text-align : right;
	font-size : 12px;
	padding-right : 5px;
	}

.Article .SubSectionHeader {
	font-weight: bold;
	font-size : 90%;
	}

.Article .MainBody {
	margin : 0 0 15px 15px;
	}

.Article .SubBody {
	margin-left : 15px;
	}

.Article .DownloadLink {
	text-align: center;
	font-weight: bold;
	font-size: 110%;
	}

.Article .CodeListing {
	width: 740px;
	overflow: auto;
	}
</style>

<div class="Article">

<h4 class="MainNavMenu"><a name="Top"></a><a href="#Download">Download</a> | <a href="#Usage">Usage</a> | <a href="#Functions">Functions</a> | <a href="#Examples">Examples</a> | <a href="#History">Revision History</a></h4>

<p>The DP_AlphaWords library provides a simple method for converting arbitrary text to a list of words which help to disambiguate spelling.  For example the word "CAT" may be translated to "Charlie Alfa Tango".</p>
<p>This translation is useful when communicating information where spelling is crucial (computer passwords, names, license plate numbers, etc) over the phone or radio.  It may also be useful when presenting potentially ambigious information such as randomly generated user names or passwords.</p>
<ul><li>The function can output a simple list or can output a verbose script suitable for reading.  The verbose output support several formatting options.</li>
	<li>The function supports several alphabet standards.</li>
	<li>The function supports most typable english characters and will translate them to their names.  For example the character "}" will be translated to "Right Curly Brace".</li>
</ul>
<p>The function supports the following alphabets:</p>
<ul><li><strong>NATO</strong>: The NATO phonetic alphabet (used by most international and military agencies).  <a href="http://en.wikipedia.org/wiki/NATO_phonetic_alphabet">Source</a>.</li>
	<li><strong>LAPD</strong>: The Los Angeles Police Department alphabet (used by most law enforcement and emergency service agencies in the US).  <a href="http://en.wikipedia.org/wiki/LAPD_phonetic_alphabet">Source</a>.</li>
	<li><strong>Army1916</strong>: From the 1916 Signal Book.  <a href="http://gordon.army.mil/ocos/Museum/alpha.asp">Source</a>.</li>
	<li><strong>Army1939</strong>: From the 1939 Basic Field Manual FM-24-5 Signal Communications","1939.</li>
	<li><strong>Army1944</strong>: Radio News Vol. 31 No. 2, 1944.</li>
	<li><strong>RAF1924</strong>: 1924-1942.  <a href="http://en.wikipedia.org/wiki/RAF_phonetic_alphabet">Source</a>.</li>
	<li><strong>RAF1942</strong>: 1942-1943.  <a href="http://en.wikipedia.org/wiki/RAF_phonetic_alphabet">Source</a>.</li>
	<li><strong>RAF1943</strong>: 1943-1956.  <a href="http://en.wikipedia.org/wiki/RAF_phonetic_alphabet">Source</a>.</li>
	<li><strong>Gorey</strong>: From "The Gashleycrumb Tinies" by Edward Gorey, 1963.  Used with respectful adoration, but without permission.</li>
	<li><strong>Grover</strong>: From "Grover and the Twenty-Six Scoops" by Patricia Thackray featured in "The Sesame Street Bedtime Storybook".  Used with fond memory and love, but without permission.</li>
</ul>
<p>The extension has been tested successfully on Internet Explorer 6+, Firefox 1+ and Opera 9+.</p>


<h2><a name="Download"></a>Download</h2>
<div class="MainNavLink"><a href="#Top">back to top</a></div>
<div class="MainBody">
	<p>This component requires a JavaScript (ECMAScript) 1.3 (or better) development environment.  All downloads and code are covered by our <a href="/source-code-policy/">Source Code Policy</a>.</p>
	<p class="DownloadLink"><a href="http://home.comcast.net/~kiwidust/JSExtensions/DP_AlphaWords/DP_AlphaWords.zip">DP_AlphaWords.zip</a>, 4.80kb Zip-Format Archive</p>
</div>


<h2><a name="Usage"></a>Usage</h2>
<div class="MainNavLink"><a href="#Top">back to top</a></div>
<div class="MainBody">
	<p>The library consists of a single JavaScript file with a .JS extension.</p>

	<h3>Importing the Library</h3>
	<p>The library must be imported before it is used.  To import the library use the <em>&lt;script&gt;</em> tag.  For example:<br><em>&lt;script type="text/javascript" src="DP_AlphaWords.js"&gt;&lt;/script&gt;</em>.</p>
	<p>Your path may vary depending on the location of the script on your server.</p>

	<h3>Using the Library</h3>
	<p>Once the library has been imported you may access any of the functions within it directly.  For example:</p>
	<pre>
var MyList = dpAlphaWords("CAT", "LAPD", "Simple");
	</pre>
	<p>See the <a href="#Functions">Functions</a> section for more information.</p>

	<h3>General Recommendations</h3>
	<p>Remember that JavaScript can easily convert lists to arrays using the <em>split()</em> method.  Using it you can easily convert the output from the function into an array.</p>
	<p>If you plan on using only one alphabet you can shrink the code somewhat by removing the unneeded alphabets from the library.</p>
</div>


<h2><a  name="Functions"></a>Functions</h2>
<div class="MainNavLink"><a href="#Top">back to top</a></div>
<div class="MainBody">

	<p>There is only one function currently available in the library, the dpAlphaWords function:</p>

	<h3><a name="Function_dpDump"></a>dpAlphaWords()</h3>
	<div class="SubBody">
		<p>This functions accepts a string as input and returns the alphaword translation in the format specified.</p>
		<p class="SubSectionHeader">Function Signature</p>
			<p>dpAlphaWords(Input, [AlphaSet,] [OutputStyle,] [OutputPrefix,] [OutputPostfix,] [OutputIncludeCSS])</p>
		<p class="SubSectionHeader">Arguments</p>
			<p>This method has six arguments:</p>
			<ul><li><i>Input</i>: String, Required.  The string to be converted.</li>
				<li><i>AlphaSet</i>: String, Optional (defaults to <em>NATO</em>).  The alphabet set to use in the conversion.  Acceptable values are "NATO", "LAPD", "Army1916", "Army1939", "Army1944", "RAF1924", "RAF1942", "RAF1943", "Gorey" or "Grover".</li>
				<li><i>OutputStyle</i>: String, Optional (defaults to <em>Simple</em>).  Determines the style of output.  Acceptable values are:
					<ul><li><em>Simple</em>: Each character is translated directly to the corrosponding word.</li>
						<li><em>Verbose</em>: Each character is presented again and translated to a phrase including character type and case information in addition to the corrosponding word.</li>
						<li><em>Array</em>: The string is converted to an array where each element is an object with information about the character.  These objects have the following properties:
							<ul><li><em>Char</em>: The character itself.</li>
								<li><em>Code</em>: The ASCII code of the character.</li>
								<li><em>Trans</em>: The "translation" of the character (depends upon the Alphabet set used).</li>
								<li><em>Type</em>: The type of character.  Value will be one of the following: "Lowercase", "Uppercase", "Number", "Unknown" or "Symbol".</li>
							</ul>
						</li>
					</ul>
	  			</li>
				<li><i>OutputPrefix</i>: String, Optional (defaults to an empty string).  This string will be prefixed (inserted before) to the translation of each character.  This argument is ignored if the OutputStyle is "Array".</li>
				<li><i>OutputPostfix</i>: String, Optional (defaults to a space).  This string will be postfixed (inserted after) to the translation of each character.  This argument is ignored if the OutputStyle is "Array".</li>
				<li><i>OutputIncludeCSS</i>: Boolean, Optional (defaults to <em>false</em>).  If <em>true</em> the output will be tagged with CSS identifiers (using <em>span</em> tags) which the developer can set.  These declarations are <em>"dpAlphaWords_Char"</em> (applied to the character in Verbose-style output) and <em>"dpAlphaWords_Trans"</em> (applied to the translation).  Note that for long inputs including CSS can dramtically increase the size of the output.</li>
			</ul>
		<p class="SubSectionHeader">Return</p>
			<p>String.  The function returns the translation of the input string according to the arguments passed.</p>
	</div>

</div>


<h2><a name="Examples"></a>Examples</h2>
<div class="MainNavLink"><a href="#Top">back to top</a></div>
<div class="MainBody">

	<h3>Simple Conversions</h3>
	<p>Simple conversions just return the word or phrase associated with each character.  The simplest method for converting a string is to accept all defaults.  For example:</p>
	<pre>
dpAlphaWords("Alphabet");
	</pre>
	<p>Returns:</p>
	<p style="margin-left: 25px;"><b>Alfa Lima Papa Hotel Alfa Bravo Echo Tango</b></p>
	<p>By using the formatting options you can ouput lists and other HTML.  Here we'll do the same conversion using the LAPD alphabet and create HTML list items for display:</p>
	<pre>
dpAlphaWords("Alphabet", "LAPD", "Simple", "&lt;li&gt;", "&lt;/li&gt;");
	</pre>
	<p>This returns:</p>
	<ul><li>Adam</li>
		<li>Lincoln</li>
		<li>Paul</li>
		<li>Henry</li>
		<li>Adam</li>
		<li>Boy</li>
		<li>Edward</li>
		<li>Tom</li>
	</ul>
	<p>By using the formatting options you can ouput lists and easily convert those lists to arrays using the <em>split()</em> method.  Here's the same conversion changed to output an array of values:</p>
	<pre>
MyArray = dpAlphaWords("Alphabet", "LAPD", "Simple", "", ",").split();
	</pre>

	<h3>Verbose Conversions</h3>
	<p>Verbose conversions are more appropriate for generating readable scripts where case matters.  You'll mostly likely want to format verbose output in some way.   For example here is verbose output formatted with line breaks between each translation:</p>
	<pre>
dpAlphaWords("Alphabet", "LAPD", "Verbose", "", "&lt;br&gt;");
	</pre>
	<p>This would return:</p>
	<p style="margin-left: 25px;">
Uppercase "A" as in Adam<br />
Lowercase "l" as in Lincoln<br />
Lowercase "p" as in Paul<br />
Lowercase "h" as in Henry<br />
Lowercase "a" as in Adam<br />
Lowercase "b" as in Boy<br />
Lowercase "e" as in Edward<br />
Lowercase "t" as in Tom	<br />
	</p>
	<p>Verbose conversions are easier to understand than simple conversions when symbols and numerals are involved.  Consider the following conversion of a randomly generated password:</p>
	<pre>
dpAlphaWords("K$rT12(]f", "NATO", "Verbose", "", "&lt;br&gt;");
	</pre>
	<p>This would return:</p>
	<p style="margin-left: 25px;">
Uppercase "K" as in Kilo<br />
The Dollar Sign symbol ("$")<br />
Lowercase "r" as in Romeo<br />
Uppercase "T" as in Tango<br />
The number "1"<br />
The number "2"<br />
The Left Parenthesis symbol ("(")<br />
The Right Square Bracket symbol ("]")<br />
Lowercase "f" as in Foxtrot<br />
	</p>

	<h3>Array Conversions</h3>
	<p>Using the Array type provides you with complete control over display and usage.  The output from this style is an array where each element is an object representing information about a single character of the input string.   Using the Array style is more difficult but useful when the simple or verbose styles do not meet your needs.</p>
	<p>The following example code presents a table with all of the values returned in the Array style:</p>
	<pre>
AWInfo = dpAlphaWords("Alphabet", "LAPD", "Array");
document.write("$lt;table border='1' cellpadding='4'$gt;");
	document.write("$lt;tr$gt;");
	document.write("$lt;td$gt;Char$lt;/td$gt;");
	document.write("$lt;td$gt;Code$lt;/td$gt;");
	document.write("$lt;td$gt;Trans$lt;/td$gt;");
	document.write("$lt;td$gt;Type$lt;/td$gt;");
	document.write("$lt;/tr$gt;");
for ( Cnt = 0; Cnt < AWInfo.length; Cnt++ ) {
	document.write("$lt;tr$gt;");
	document.write("$lt;td$gt;" + AWInfo.Char + "$lt;/td$gt;");
	document.write("$lt;td$gt;" + AWInfo.Code + "$lt;/td$gt;");
	document.write("$lt;td$gt;" + AWInfo.Trans + "$lt;/td$gt;");
	document.write("$lt;td$gt;" + AWInfo.Type + "$lt;/td$gt;");
	document.write("$lt;/tr$gt;");
};
document.write("$lt;/table$gt;");
	</pre>

</div>


<h2><a name="History"></a>Revision History</h2>
<div class="MainNavLink"><a href="#Top">back to top</a></div>
<div class="MainBody">
	<p><b>September 10, 2006</b></p>
		<ul><li>Added the "Array" output method.</li>
		</ul>
	<p><b>August 26, 2006</b></p>
		<ul><li>Initial Release.</li>
		</ul>
</div>

</div>