function firstNonRepeatedChar(str) {
 let i=0;
 let j=0;
	while(i<str.length && j<str.length)
		{
			while(str[i]==str[j])
				{
					j++;
				}
			if(j-i<2) return str[i]
			i=j;
		}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
