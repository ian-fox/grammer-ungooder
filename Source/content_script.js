walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
  var replacements = {
    "\\b(T|t)he\\b": "$1eh",
    "(G|g)old": "$1lod",
    "([Aa])n\\s([Hh]\\w*)": "$1 $2",
    "(S|s)hould('|’)ve": "$1hould of",
    "(W|w)ould('|’)ve": "$1ould of",
    "(C|c)ould('|’)ve": "$1ould of",
    "(S|s)hould\\shave": "$1hould of",
    "(W|w)ould\\shave": "$1ould of",
    "\\bam\\b": "is",
    "\\b(I|i)\\b": "me",
    "a lot": "alot",
    "(E|e)ffect": "TEMP$1ffect",
    "affect": "effect",
    "Affect": "Effect",
    "TEMPeffect": "affect",
    "TEMPEffect": "Affect",
    "(B|b)ecause": "coz",
    "(C|c)ollege": "$1olege",
    "(C|c)ould have": "$1ould of",
    "(C|c)ould('|’)ve": "$1ould of",
    "(F|f)ewer":"TEMP$1ewer",
    "\\nLess\\n": "Fewer",
    "\\nless\\n": "fewer",
    "TEMPFewer": "Less",
    "TEMPfewer": "less",
    "(G|g)orgeous": "$1orgeos",
    "(H|h)as": "TEMP$1as",
    "(H|h)ave":"$1as",
    "TEMP(H|h)as": "$1ave",
    "help": "halp",
    "know": "no",
    "(P|p)rincipal": "TEMP$1rincipal",
    "(P|p)rinciple": "$1rincipal",
    "TEMP(P|p)rincipal": "$1rincipal",
    "(R|r)eally": "$1ally",
    "(S|s)weetie": "$1weaty",
    "(T|t)han":"TEMP$1han",
    "(T|t)hen": "$1an",
    "TEMP(T|t)han": "$1en",
    "(T|t)hat": "dat",
    "(T|t)here": "their",
    "(T|t)hey('|’)re": "their",
    "(T|t)his": "dis",
    "(W|w)hat": "$1at",
    "(W|w)ith": "$1if",
    "(Y|y)ou('|’)re": "TEMP$1ou$2re",
    "(Y|y)our": "$1ou're",
    "TEMP(Y|y)ou('|’)re": "$1our",
  };

	var v = textNode.nodeValue;

  for (replacement in replacements) {
    var se = new RegExp(replacement, "g");
    var re = replacements[replacement];
    if (Math.random() > 0.7) v = v.replace(se, re);
  }


	textNode.nodeValue = v;
}


