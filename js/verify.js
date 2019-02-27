function check(token){
	var msg = "";
	if(token.length<6)
	{
		msg=msg+"\nLength of password is less than 6 characters.";
	}
	else
		if(token.length>12)
		{			
			msg=msg+"\nLength of password is greater than 12 characters.";
		}

	var count1 = [0,0,0,0];
	var count2 = 0;

	for(var i=0;i<token.length;i++)
	{
		if(token.charCodeAt(i)>=65&&token.charCodeAt(i)<=91)
			count1[0]=count1[0]+1;
		else
			if(token.charCodeAt(i)>=97&&token.charCodeAt(i)<=123)
				count1[1]=count1[1]+1;
		else
			if(token.charCodeAt(i)>=48&&token.charCodeAt(i)<=57)
				count1[2]=count1[2]+1;
		else
			if(token.charCodeAt(i)==42||token.charCodeAt(i)==36||token.charCodeAt(i)==95||token.charCodeAt(i)==35||token.charCodeAt(i)==61||token.charCodeAt(i)==64)
				count1[3]=count1[3]+1;
		else
			if(token.charCodeAt(i)==37||token.charCodeAt(i)==33||token.charCodeAt(i)==40||token.charCodeAt(i)==41)
				count2=count2+1;
	}
	var label = ["A-Z","a-z","0-9","*$_#=@"];
	
	for(var x=0;x<4;x++)
	{
		if(count1[x]==0)
		{
			msg = msg+ "\nPassword must contain at least 1 letter in "+label[x]+".";
		}
	}
	if(count2!=0)
		msg=msg+"\nPassword should not contain any letter from %!)(.";

	if(msg!="")
		alert("FAILURE\n"+token+" : "+msg);
	else
		alert("SUCCESS\n"+token+" : Password is acceptable.");
}


function validate(obj) {

	var str = obj.value;
	str = str.trim();
	var words = str.split(',');
    words.forEach(check);
	}
