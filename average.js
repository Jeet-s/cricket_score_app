var i=0,j=0,k;
show();
function show(){
	x=document.getElementsByClassName("1");
	for(;i<x.length;)
	{
		for(;j<allAverage.length;j++)
		{
			for(k=0;k<allAverage[j].length;k++)
			{
				x[i].innerHTML=allAverage[j][k];
				i++;
			}
		}
	}
}