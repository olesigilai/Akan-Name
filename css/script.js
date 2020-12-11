var maleName =["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw"]
var femaleName =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
function getDay (cc,yy,mm,dd)
{
return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
}