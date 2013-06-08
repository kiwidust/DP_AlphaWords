/*  DepressedPress.com, DP_AlphaWords

Author: Jim Davis, the Depressed Press of Boston
Created: September 9, 2005
Contact: webmaster@depressedpress.com
Website: www.depressedpress.com

Full documentation can be found at:
http://depressedpress.com/javascript-extensions/

DP_AlphaWords offers the ability to provide unambigious presentation of arbitrary strings such as generated passwords or usernames.

The phonetic alphabets used in the this component are adapted from the following sources:

	+) NATO: The NATO phonetic alphabet (used by most international and military operations).  Source: http://en.wikipedia.org/wiki/NATO_phonetic_alphabet
	+) LAPD: The Los Angeles Police Department alphabet (used by most police agencies in the US).  Source: http://en.wikipedia.org/wiki/LAPD_phonetic_alphabet
	+) Army1916: From the 1916 Signal Book.  Source: http://gordon.army.mil/ocos/Museum/alpha.asp
	+) Army1939: From the 1939 Basic Field Manual FM-24-5 Signal Communications","1939.  Source: http://gordon.army.mil/ocos/Museum/alpha.asp
	+) Army1944: Radio News Vol. 31 No. 2, 1944.  Source: http://gordon.army.mil/ocos/Museum/alpha.asp
	+) RAF1924: 1924–1942.  Source: http://en.wikipedia.org/wiki/RAF_phonetic_alphabet
	+) RAF1942: 1942–1943.  Source: http://en.wikipedia.org/wiki/RAF_phonetic_alphabet
	+) RAF1943: 1943–1956.  Source: http://en.wikipedia.org/wiki/RAF_phonetic_alphabet
	+) Gorey: From "The Gashleycrumb Tinies" by Edward Gorey, 1963.  Used with respectful adoration, but without permission.
	+) Grover: From "Grover and the Twenty-Six Scoops" by Patricia Thackray featured in "The Sesame Street Bedtime Storybook".  Used with fond memory and love, but without permission.


+ + + + + + + + LEGAL NOTICE + + + + + + + +

Copyright (c) 1996-2014, The Depressed Press (depressedpress.com)

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

+) Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

+) Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

+) Neither the name of the DEPRESSED PRESS (DEPRESSEDPRESS.COM) nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

dpAlphaWords = function(Input, AlphaSet, OutputStyle, OutputPrefix, OutputPostfix, OutputIncludeCSS) {

		// Set CSS Names (to make it easy to change)
	var CharCSS = "dpAlphaWords_Char";
	var TransCSS = "dpAlphaWords_Trans";

		// Set the Input argument
	if ( typeof Input != "string" ) {
		throw new Error("The argument 'input' is not a string value.");
	};
		// Set the AlphaSet argument
	if ( typeof AlphaSet != "string" ) {
		AlphaSet = "nato";
	};
	switch (AlphaSet.toLowerCase()) {
		case "nato":
			AlphaSet = ["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"];
			break;
		case "lapd":
			AlphaSet = ["Adam","Boy","Charles","David","Edward","Frank","George","Henry","Ida","John","King","Lincoln","Mary","Nora","Ocean","Paul","Queen","Robert","Sam","Tom","Union","Victor","William","X-ray","Young","Zebra"];
			break;
		case "army1916":
			AlphaSet = ["Able","Boy","Cast","Dock","Easy","Fox","George","Have","Item","Jig","King","Love","Mike","Nan","Opal","Pup","Quack","Rush","Snail","Tare","Unit","Vice","Watch","X-ray","Yoke","Zed"];
			break;
		case "army1939":
			AlphaSet = ["Affirm","Baker","Cast","Dog","Easy","Fox","George","Hypo","Inter","Jig","King","Love","Mike","Negat","Option","Prep","Queen","Roger","Sail","Tare","Unit","Victor","William","X-ray","Yoke","Zed"];
			break;
		case "army1944":
			AlphaSet = ["Able","Baker","Charlie","Dog","Easy","Fox","George","How","Item","Jig","King","Love","Mike","Nan","Oboe","Peter","Queen","Roger","Sail","Tare","Uncle","Victor","William","X-ray","Yoke","Zebra"];
			break;
		case "raf1924":
			AlphaSet = ["Ace","Beer","Charlie","Don","Edward","Freddie","George","Harry","Ink","Johnnie","King","London","Monkey","Nuts","Orange","Pip","Queen","Robert","Sugar","Toc","Uncle","Vic","William","X-ray","Yorker","Zebra"];
			break;
		case "raf1942":
			AlphaSet = ["Apple","Beer","Charlie","Dog","Edward","Freddy","George","Harry","In","Johnny","King","Love","Mother","Nuts","Orange","Peter","Queen","Roger","Sugar","Tommy","Uncle","Vic","William","X-ray","Yoke","Zebra"];
			break;
		case "raf1943":
			AlphaSet = ["Able","Baker","Charlie","Dog","Easy","Fox","George","How","Item","Jig","King","Love","Mike","Nab","Oboe","Peter","Queen","Roger","Sugar","Tare","Uncle","Victor","William","X-ray","Yoke","Zebra"];
			break;
		case "gorey":
			AlphaSet = ["Amy (who fell down the stairs)","Basil (assaulted by bears)","Clara (who wasted away)","Desmond (thrown out of a sleigh)","Ernest (who choked on a peach)","Fanny (sucked dry by a leech)","George (smothered under a rug)","Hector (done in by a thug)","Ida (who drowned in a lake)","James (who took lye by mistake)","Kate (who was struck with an ax)","Leo (who swallowed some tacks)","Maud (who was swept out to sea)","Neville (who died of ennui)","Olive (run through with an awl)","Prue (trampled flat in a brawl)","Quentin (who sank in a mire)","Rhoda (consumed by a fire)","Susan (who perished of fits)","Titus (who flew into bits)","Una (who slipped down a drain)","Victor (squashed under a train)","Winnie (embedded in ice)","Xerxes (devoured by mice)","Yorick (whose head was knocked in)","Zillah (who drank too much gin)"];
			break;
		case "grover":
			AlphaSet = ["Anchovy Applesauce","Baloney Bonbon","Catus Crunch","Dinosaur Dip","Eggplant Eclair","Fruitcake Fiesta Flip","Gumball Goop","Honey Hamburger Hash","Imitation Igloo","Jiffy Jellybean Jive","Kangaroo Kringle","Lavender Licorice","Mushroom Mango Mash","Nifty Noodle Nectar","Orange Oyster Oops","Pickle Parfait","Quacky Quip","Ravioli Ripple","Sardine Swirl","Triple Turkey Trifle","Upside-down Uglifruit","Vanilla","Watermelon Wobble","XXXXXXX for Many Kisses","Yak Yogurt Yum-yum","Zucchini Zip"];
			break;
		default:
			throw new Error("The value of argument AlphaSet, '" + AlphaSet + "', does not match an available alphabet set.");
	};

		// Set Output Arguments
	if ( typeof OutputStyle != "string" ) {
		OutputStyle = "simple";
	} else {
		OutputStyle = OutputStyle.toLowerCase();
	};
	if ( typeof OutputPrefix != "string" ) {
		OutputPrefix = "";
	};
	if ( typeof OutputPostfix != "string" ) {
		OutputPostfix = " ";
	};
	if ( !OutputIncludeCSS ) {
		OutputIncludeCSS = false;
	};

		// Build the Reference Array
	var CRef = [];
		// Add Lowercase Letters
	for (var Cnt = 97; Cnt < 123; Cnt++ ) {
		CRef[Cnt] = AlphaSet[Cnt - 97];
	};
		// Add Uppercase Letters
	for (var Cnt = 65; Cnt < 91; Cnt++ ) {
		CRef[Cnt] = AlphaSet[Cnt - 65];
	};
		// Add Numbers
	CRef[48] = "Zero";
	CRef[49] = "One";
	CRef[50] = "Two";
	CRef[51] = "Three";
	CRef[52] = "Four";
	CRef[53] = "Five";
	CRef[54] = "Six";
	CRef[55] = "Seven";
	CRef[56] = "Eight";
	CRef[57] = "Nine";
		// Add Numbers
	CRef[9] = "Horizontal Tab";
	CRef[10] = "Line Feed";
	CRef[13] = "Carriage Return";
	CRef[32] = "Space";
	CRef[33] = "Exclamation Point";
	CRef[34] = "Quotation Mark";
	CRef[35] = "Number (Pound) Sign";
	CRef[36] = "Dollar Sign";
	CRef[37] = "Percent Sign";
	CRef[38] = "Ampersand";
	CRef[39] = "Apostrophe";
	CRef[40] = "Left Parenthesis";
	CRef[41] = "Right Parenthesis";
	CRef[42] = "Asterisk";
	CRef[43] = "Plus Sign";
	CRef[44] = "Comma";
	CRef[45] = "Hyphen";
	CRef[46] = "Period";
	CRef[47] = "Forward Slash (Solidus)";
	CRef[58] = "Colon";
	CRef[59] = "Semi-colon";
	CRef[60] = "Less Than Sign";
	CRef[61] = "Equals Sign";
	CRef[62] = "Greater Than Sign";
	CRef[63] = "Question Mark";
	CRef[64] = "At Sign";
	CRef[91] = "Left Square Bracket";
	CRef[92] = "Backslash (Reverse solidus)";
	CRef[93] = "Right Square Bracket";
	CRef[94] = "Caret";
	CRef[95] = "Underscore";
	CRef[96] = "Acute Accent";
	CRef[123] = "Left Curly Brace";
	CRef[124] = "Vertical Bar (Pipe)";
	CRef[125] = "Right Curly Brace";
	CRef[126] = "Tilde";
	CRef[145] = "Single Beginning Quotation Mark";
	CRef[146] = "Single Ending Quotation Mark";
	CRef[147] = "Double Beginning Quotation Mark";
	CRef[148] = "Double Ending Quotation Mark";
	CRef[150] = "En Dash";
	CRef[151] = "Em Dash";

		// Set some working vars
	var InputLen = Input.length;
		// Set the output default
	if ( OutputStyle == "array" ) {
		Output = new Array();
	} else {
		Output = "";
	};

		// Loop over the Input String
	for (var Cnt = 0; Cnt < InputLen; Cnt++ ) {
		var CurOut;
			// Get the current character information
		var CurChar = Input.charAt(Cnt);
		var CurCode = Input.charCodeAt(Cnt);
			// If there's a translation, grab it
		var CurTrans = CurChar;
		if ( CRef[CurCode] ) {
			CurTrans = CRef[CurCode]
		};
			// Apply styles if needed
		if ( OutputIncludeCSS ) {
			CurChar = "<span class='" + CharCSS + "'>" + CurChar + "</span>"
			CurTrans = "<span class='" + TransCSS + "'>" + CurTrans + "</span>"
		};

		switch ( OutputStyle ) {

			case "simple":

				CurOut = CurTrans;
					// Add the prefix/postfix
				CurOut = OutputPrefix + CurOut + OutputPostfix;
					// Add the current line to the Output
				Output += CurOut;
				break;

			case "verbose":

					// Determine class of character
				if ( CurCode > 96 && CurCode < 123 ) {
					CurOut =  "Lowercase \"" + CurChar + "\" as in " + CurTrans;
				} else if ( CurCode > 64 && CurCode < 91 ) {
					CurOut = "Uppercase \"" + CurChar + "\" as in " + CurTrans;
				} else if ( CurCode > 47 && CurCode < 58 ) {
					CurOut = "The number \"" + CurChar + "\"";
				} else if ( CurTrans == CurChar ) {
					CurOut = "Unknown character \"" + CurChar + "\"";
				} else {
					CurOut = "The " + CurTrans + " symbol (\"" + CurChar + "\")";
				};
					// Add the prefix/postfix
				CurOut = OutputPrefix + CurOut + OutputPostfix;
					// Add the current line to the Output
				Output += CurOut;
				break;

			case "array":

					// Set up a new Object for the data
				Output[Cnt] = new Object;
					// Set the known elements
				Output[Cnt].Char = CurChar;
				Output[Cnt].Code = CurCode;
				Output[Cnt].Trans = CurTrans;
					// Get the type
				if ( CurCode > 96 && CurCode < 123 ) {
					Output[Cnt].Type = "Lowercase";
				} else if ( CurCode > 64 && CurCode < 91 ) {
					Output[Cnt].Type = "Uppercase";
				} else if ( CurCode > 47 && CurCode < 58 ) {
					Output[Cnt].Type = "Number";
				} else if ( CurTrans == CurChar ) {
					Output[Cnt].Type = "Unknown";
				} else {
					Output[Cnt].Type = "Symbol";
				};
				break;

		};

	};

		// Return
	return Output;

};
