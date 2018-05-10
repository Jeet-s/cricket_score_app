var i=0,j=0,k;
show();
function show(){
	x=document.getElementsByClassName("1");
	for(;i<x.length;)
	{
		for(;j<allSR.length;j++)
		{
			for(k=0;k<allSR[j].length;k++)
			{
				x[i].innerHTML=allSR[j][k];
				i++;
			}
		}
	}
}
