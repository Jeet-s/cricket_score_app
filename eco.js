var i=0,j=0,k;
show();
function show(){
	x=document.getElementsByClassName("1");
	for(;i<x.length;)
	{
		for(;j<alleco.length;j++)
		{
			for(k=0;k<alleco[j].length;k++)
			{
				x[i].innerHTML=alleco[j][k];
				i++;
			}
		}
	}
}
