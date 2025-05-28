function indexOfIgnoreCase(s1, s2){
	let l1 = s1.length;
    let l2 = s2.length;
    if(l1<l2)
		return -1;
	let ls1 = s1.toLowerCase();
	let ls2 = s2.toLowerCase();
   for(let i=0;i<l1;i++){
	   let temp = i;
	   while(temp<l1 && ls1[temp]!=ls2[0])
		    temp++;
	   if(temp===l1)
		   return -1;
	   let dummy = temp;
	   while(dummy-temp<l2){
		   {
			   if(ls1[dummy]!==ls2[dummy-temp])
				   break;
			   dummy++;
		   }
		   if(dummy-temp===l2)
		   {
			   
			   let check = s1.slice(temp,dummy);
			   for(let j=0;j<l2;j++){
				   if(ls1[j] !== check[j])
					   return temp+j;
			   }
		   }
			   
		   else 
			   i = temp;
		   
			   
	   }
   }
	return -1;
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
