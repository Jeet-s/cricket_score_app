var i=0,j=0,k;
show();
function show(){
	x=document.getElementsByClassName("1");
	for(;i<x.length;)
	{
		for(;j<allRun.length;j++)
		{
			for(k=0;k<allRun[j].length;k++)
			{
				x[i].innerHTML=allRun[j][k];
				i++;
			}
		}
	}
}

