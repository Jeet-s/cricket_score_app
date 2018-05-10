var mrohit = ["Rohit Sharma",16+22+18+12,22+10+10+19,3+1,0,0,0,0,0,0];//name,runs,balls_played,innings,average,strike rate,wickets,balls_bowled,runs_concieved,economy
var mguptil = ["Martin Guptil",21+20+16,12+15+9,3,0,0,0,0,0,0];
var mkohli = ["Virat Kohli",4+4+22,2+2+13,3,0,0,0,0,0,0];
var mbutler = ["Jos Butler",4+4+20,2+4+10,3,0,0,0,0,0,0];
var mwarner = ["David Warner",37,23,1,0,0,0,0,0,0];
var mrana = ["Nitish Rana",4+4+0,2+2+2+2,4,0,0,0,0,0.0];
var myuvraj = ["Yuvraj Singh",4+4+0+4,2+2+1+2,4,0,0,1+1+1,18+6,4+7+12+4,0];
var mpollard = ["Kieron Pollard",0,100,100,0,0,0,6,12,0];
var mhardik = ["Hardik Pandya",0+4+4,6+2+3,3,0,0,3,18,4+4+1,0];
var mharbhajan = ["Harbhajan Singh",12+43+9,5+24+8,2,0,0,5+2,36+12,17+14+12+10,0];
var mbumrah = ["Jasprit Bumrah",0,100,100,0,0,4+4,36+12,5+24+20+8,0];
var mmclaneghan = ["Mitchel McLaneghan",0,1,1,0,0,1,12,14,0];
var mhazlewood = ["Josh Hazlewood",2,2,1,0,0,2,18,021+5,0];
var makila = ["Akila Dananjaya",5+0,3+2,2,0,0,4+2,36+12,21+23+10+18,0];
var mishant = ["Ishant Sharma",0,100,1,0,0,1,8,0,0];
var msimmons = ["Lendl Simmons",4,3,1,0,0,0,0,0];
var mpatel = ["Parthiv Patel",4+12+0,3+5+1,3,0,0,0,0,0];
var mabd = ["AB Divilier",2,7,1,0,0,0,0,0];
var mmcullum = ["Brenden McCullum",6+0,4+2,2,0,0,0,0,0];
var mraina = ["Suresh Raina",13+5+35+17,13+5+15+15,4,0,0,0,0,0];
var mrahul = ["KL Rahul",33+1+0+0,23+3+1+3,4,0,0,0,0,0];
var miyer = ["Shreyas Iyer",0,5,1,0,0,0,0,0];
var mjadeja = ["Ravindra Jadeja",14+0+14+36,21+10+1+6,4,0,0,5+1,18+6,12+12+11+8,0];
var mbravo = ["DJ Bravo",9+12+4,7+9+2,3,0,0,5+1,18+6,10+11+10,0];
var mjohnson = ["Mitchel Johnson",25+10,12+4,1,0,0,3+3,12+12,28+11,0];
var mashwin = ["Ravichandran Ashwin",8+12,5+6,2,0,0,3+2,30+6,22+20+2+12,0];
var mstarc = ["Mitchel Starc",9,5,1,0,0,3,24,10+15,0];
var mphangiso = ["Aaron Phangiso",0,100,100,0,0,8+2,27+11,4+11+13+14,0];
var mdhoni = ["MS Dhoni",13+0+8+12,7+2+5+6,4,0,0,0,0,0];
var mumesh = ["Umesh Yadav",9+4,11+2,2,0,0,3,36+6,21+10+13+8,0];
var mdhawan = ["Sikhar Dhawan",16+9+5,10+8+6,4,0,0,0,0,0];
var mgambhir = ["Gautam Gambhir",25+2+0,15+3+3,4,0,0,0,0,0];
var mkarthik = ["Dinesh Karthik",14,8,4,0,0,0,0,0];
var mpujara = ["Cheteshwar Pujara",22,2+1+16,4,0,0,0,0,0];
var mkane = ["Kane Williamson",19+4+8,20+5+10,2,0,0,0,0,0];
var mmaxwell = ["Glenn Maxwell",6+4,2+2,2,0,0,3,12,8+8,0];
var mhenriqueses = ["Moises Henriqueses",0+3+24,5+2+10,3,0,0,3+2,12+6,12+12+9,0];
var mstokes = ["Ben Stokes",4,3,1,0,0,0,6,14,0];
var maxar = ["Axar Patel",8,8,2,0,0,0,12,17,0];
var mbk = ["B Kumar",6+14,+14+5,4,0,0,3+2,24+18,34+10+19,0];
var mboult = ["Trent Boult",14,16,2,0,0,2,18,14,0];
var mkuldeep = ["Kuldeep Yadav",0,100,100,0,0,1,12+12,18+16,0];
var munadkat = ["Jaydev Unadkat",0,100,100,0,0,3,24,13+34,0];
var mchahal = ["Yuzvendra Chahal",10+12+4,6+6+7,4,0,0,2+0,24+24,20+17+30,0];
var mtahir = ["Imran Tahir",23,16+2,2,0,0,2+2,12+10,25+13,0];

var squad = [mrohit,mguptil,mkohli,mbutler,mwarner,mrana,myuvraj,mpollard,mhardik,mharbhajan,mbumrah,mmclaneghan,mhazlewood,makila,mishant,
msimmons,mpatel,mabd,mmcullum,mraina,mrahul,miyer,mjadeja,mbravo,mjohnson,mashwin,mstarc,mphangiso,mdhoni,mumesh,
mdhawan,mgambhir,mkarthik,mpujara,mkane,mmaxwell,mhenriqueses,mstokes,maxar,mbk,mboult,mkuldeep,munadkat,mchahal,mtahir];

for(var i=0;i<squad.length;i++)
{
	for(var j=0;j<squad[i].length;j++)
	{
		squad[i][4] = squad[i][1]/squad[i][3];
		squad[i][5] = (squad[i][1]/squad[i][2])*100;
		squad[i][9] = squad[i][8]/(squad[i][7]/6);
		squad[i][4] = squad[i][4].toFixed(2); 
		squad[i][5] = squad[i][5].toFixed(2);
		squad[i][9] = squad[i][9].toFixed(2);
		
	}
}


var rrohit = [squad[0][0],squad[0][1]];
var rguptil = [squad[1][0],squad[1][1]];
var rkohli = [squad[2][0],squad[2][1]];
var rbutler = [squad[3][0],squad[3][1]];
var rwarner = [squad[4][0],squad[4][1]];
var rrana = [squad[5][0],squad[5][1]];
var ryuvraj = [squad[6][0],squad[6][1]];
var rpollard = [squad[7][0],squad[7][1]];
var rhardik = [squad[8][0],squad[8][1]];
var rharbhajan = [squad[9][0],squad[9][1]];
var rbumrah = [squad[10][0],squad[10][1]];
var rmclaneghan = [squad[11][0],squad[11][1]];
var rhazlewood = [squad[12][0],squad[12][1]];
var rakila = [squad[13][0],squad[13][1]];
var rishant = [squad[14][0],squad[14][1]];
var rsimmons = [squad[15][0],squad[15][1]];
var rpatel = [squad[16][0],squad[16][1]];
var rabd = [squad[17][0],squad[17][1]];
var rmcullum = [squad[18][0],squad[18][1]];
var rraina = [squad[19][0],squad[19][1]];
var rrahul = [squad[20][0],squad[20][1]];
var riyer = [squad[21][0],squad[21][1]];
var rjadeja = [squad[22][0],squad[22][1]];
var rbravo = [squad[23][0],squad[23][1]];
var rjohnson = [squad[24][0],squad[24][1]];
var rashwin = [squad[25][0],squad[25][1]];
var rstarc = [squad[26][0],squad[26][1]];
var rphangiso = [squad[27][0],squad[27][1]];
var rdhoni = [squad[28][0],squad[28][1]];
var rumesh = [squad[29][0],squad[29][1]];
var rdhawan = [squad[30][0],squad[30][1]];
var rgambhir = [squad[31][0],squad[31][1]];
var rkarthik = [squad[32][0],squad[32][1]];
var rpujara = [squad[33][0],squad[33][1]];
var rkane = [squad[34][0],squad[34][1]];
var rmaxwell = [squad[35][0],squad[35][1]];
var rhenriqueses = [squad[36][0],squad[36][1]];
var rstokes = [squad[37][0],squad[37][1]];
var raxar = [squad[38][0],squad[38][1]];
var rbk = [squad[39][0],squad[39][1]];
var rboult = [squad[40][0],squad[40][1]];
var rkuldeep = [squad[41][0],squad[41][1]];
var runadkat = [squad[42][0],squad[42][1]];
var rchahal = [squad[43][0],squad[43][1]];
var rtahir = [squad[44][0],squad[44][1]];
var allRun = [rrohit,rguptil,rkohli,rbutler,rwarner,rrana,ryuvraj,rpollard,rhardik,rharbhajan,rbumrah,rmclaneghan,rhazlewood,rakila,rishant,
rsimmons,rpatel,rabd,rmcullum,rraina,rrahul,riyer,rjadeja,rbravo,rjohnson,rashwin,rstarc,rphangiso,rdhoni,rumesh,
rdhawan,rgambhir,rkarthik,rpujara,rkane,rmaxwell,rhenriqueses,rstokes,raxar,rbk,rboult,rkuldeep,runadkat,rchahal,rtahir];
var runs = [];
sortRuns();
sortingr();
function sortRuns()
{
	for(var l=0;l<allRun.length;l++)
	{
		runs[l] = allRun[l][1];
	}
	runs.sort(function(a, b){return b-a});
}
function sortingr()
{
	allRun.sort(function(a,b){return runs.indexOf(a[1])-runs.indexOf(b[1])});
}




var arohit = [squad[0][0],squad[0][4]];
var aguptil = [squad[1][0],squad[1][4]];
var akohli = [squad[2][0],squad[2][4]];
var abutler = [squad[3][0],squad[3][4]];
var awarner = [squad[4][0],squad[4][4]];
var arana = [squad[5][0],squad[5][4]];
var ayuvraj = [squad[6][0],squad[6][4]];
var apollard = [squad[7][0],squad[7][4]];
var ahardik = [squad[8][0],squad[8][4]];
var aharbhajan = [squad[9][0],squad[9][4]];
var abumrah = [squad[10][0],squad[10][4]];
var amclaneghan = [squad[11][0],squad[11][4]];
var ahazlewood = [squad[12][0],squad[12][4]];
var aakila = [squad[13][0],squad[13][4]];
var aishant = [squad[14][0],squad[14][4]];
var asimmons = [squad[15][0],squad[15][4]];
var apatel = [squad[16][0],squad[16][4]];
var aabd = [squad[17][0],squad[17][4]];
var amcullum = [squad[18][0],squad[18][4]];
var araina = [squad[19][0],squad[19][4]];
var arahul = [squad[20][0],squad[20][4]];
var aiyer = [squad[21][0],squad[21][4]];
var ajadeja = [squad[22][0],squad[22][4]];
var abravo = [squad[23][0],squad[23][4]];
var ajohnson = [squad[24][0],squad[24][4]];
var aashwin = [squad[25][0],squad[25][4]];
var astarc = [squad[26][0],squad[26][4]];
var aphangiso = [squad[27][0],squad[27][4]];
var adhoni = [squad[28][0],squad[28][4]];
var aumesh = [squad[29][0],squad[29][4]];
var adhawan = [squad[30][0],squad[30][4]];
var agambhir = [squad[31][0],squad[31][4]];
var akarthik = [squad[32][0],squad[32][4]];
var apujara = [squad[33][0],squad[33][4]];
var akane = [squad[34][0],squad[34][4]];
var amaxwell = [squad[35][0],squad[35][4]];
var ahenriqueses = [squad[36][0],squad[36][4]];
var astokes = [squad[37][0],squad[37][4]];
var aaxar = [squad[38][0],squad[38][4]];
var abk = [squad[39][0],squad[39][4]];
var aboult = [squad[40][0],squad[40][4]];
var akuldeep = [squad[41][0],squad[41][4]];
var aunadkat = [squad[42][0],squad[42][4]];
var achahal = [squad[43][0],squad[43][4]];
var atahir = [squad[44][0],squad[44][4]];

var allAverage = [arohit,aguptil,akohli,abutler,awarner,arana,ayuvraj,apollard,ahardik,aharbhajan,abumrah,amclaneghan,ahazlewood,aakila,aishant,
asimmons,apatel,aabd,amcullum,araina,arahul,aiyer,ajadeja,abravo,ajohnson,aashwin,astarc,aphangiso,adhoni,aumesh,
adhawan,agambhir,akarthik,apujara,akane,amaxwell,ahenriqueses,astokes,aaxar,abk,aboult,akuldeep,aunadkat,achahal,atahir];

var Averages = [];

sortAverage();
sortingAvg();


function sortAverage()
{
	for(var l=0;l<allAverage.length;l++)
	{
		Averages[l] = allAverage[l][1];
	}
	Averages.sort(function(a, b){return b-a});
}
function sortingAvg()
{
	allAverage.sort(function(a,b){return Averages.indexOf(a[1])-Averages.indexOf(b[1])});
}




var srohit = [squad[0][0],squad[0][5]];
var sguptil = [squad[1][0],squad[1][5]];
var skohli = [squad[2][0],squad[2][5]];
var sbutler = [squad[3][0],squad[3][5]];
var swarner = [squad[4][0],squad[4][5]];
var srana = [squad[5][0],squad[5][5]];
var syuvraj = [squad[6][0],squad[6][5]];
var spollard = [squad[7][0],squad[7][5]];
var shardik = [squad[8][0],squad[8][5]];
var sharbhajan = [squad[9][0],squad[9][5]];
var sbumrah = [squad[10][0],squad[10][5]];
var smclaneghan = [squad[11][0],squad[11][5]];
var shazlewood = [squad[12][0],squad[12][5]];
var sakila = [squad[13][0],squad[13][5]];
var sishant = [squad[14][0],squad[14][5]];
var ssimmons = [squad[15][0],squad[15][5]];
var spatel = [squad[16][0],squad[16][5]];
var sabd = [squad[17][0],squad[17][5]];
var smcullum = [squad[18][0],squad[18][5]];
var sraina = [squad[19][0],squad[19][5]];
var srahul = [squad[20][0],squad[20][5]];
var siyer = [squad[21][0],squad[21][5]];
var sjadeja = [squad[22][0],squad[22][5]];
var sbravo = [squad[23][0],squad[23][5]];
var sjohnson = [squad[24][0],squad[24][5]];
var sashwin = [squad[25][0],squad[25][5]];
var sstarc = [squad[26][0],squad[26][5]];
var sphangiso = [squad[27][0],squad[27][5]];
var sdhoni = [squad[28][0],squad[28][5]];
var sumesh = [squad[29][0],squad[29][5]];
var sdhawan = [squad[30][0],squad[30][5]];
var sgambhir = [squad[31][0],squad[31][5]];
var skarthik = [squad[32][0],squad[32][5]];
var spujara = [squad[33][0],squad[33][5]];
var skane = [squad[34][0],squad[34][5]];
var smaxwell = [squad[35][0],squad[35][5]];
var shenriqueses = [squad[36][0],squad[36][5]];
var sstokes = [squad[37][0],squad[37][5]];
var saxar = [squad[38][0],squad[38][5]];
var sbk = [squad[39][0],squad[39][5]];
var sboult = [squad[40][0],squad[40][5]];
var skuldeep = [squad[41][0],squad[41][5]];
var sunadkat = [squad[42][0],squad[42][5]];
var schahal = [squad[43][0],squad[43][5]];
var stahir = [squad[44][0],squad[44][5]];

var allSR = [srohit,sguptil,skohli,sbutler,swarner,srana,syuvraj,spollard,shardik,sharbhajan,sbumrah,smclaneghan,shazlewood,sakila,sishant,
ssimmons,spatel,sabd,smcullum,sraina,srahul,siyer,sjadeja,sbravo,sjohnson,sashwin,sstarc,sphangiso,sdhoni,sumesh,
sdhawan,sgambhir,skarthik,spujara,skane,smaxwell,shenriqueses,sstokes,saxar,sbk,sboult,skuldeep,sunadkat,schahal,stahir];

var SR = [];

sortSR();
sortings();


function sortSR()
{
	for(var l=0;l<allSR.length;l++)
	{
		SR[l] = allSR[l][1];
	}
	SR.sort(function(a,b){return b-a});
}
function sortings()
{
	allSR.sort(function(a,b){return SR.indexOf(a[1])-SR.indexOf(b[1])});
}






var wyuvraj = [squad[6][0],squad[6][6]];
var wpollard = [squad[7][0],squad[7][6]];
var whardik = [squad[8][0],squad[8][6]];
var wharbhajan = [squad[9][0],squad[9][6]];
var wbumrah = [squad[10][0],squad[10][6]];
var wmclaneghan = [squad[11][0],squad[11][6]];
var whazlewood = [squad[12][0],squad[12][6]];
var wakila = [squad[13][0],squad[13][6]];
var wishant = [squad[14][0],squad[14][6]];
var wjadeja = [squad[22][0],squad[22][6]];
var wbravo = [squad[23][0],squad[23][6]];
var wjohnson = [squad[24][0],squad[24][6]];
var washwin = [squad[25][0],squad[25][6]];
var wstarc = [squad[26][0],squad[26][6]];
var wphangiso = [squad[27][0],squad[27][6]];
var wumesh = [squad[29][0],squad[29][6]];
var wmaxwell = [squad[35][0],squad[35][6]];
var whenriqueses = [squad[36][0],squad[36][6]];
var wstokes = [squad[37][0],squad[37][6]];
var waxar = [squad[38][0],squad[38][6]];
var wbk = [squad[39][0],squad[39][6]];
var wboult = [squad[40][0],squad[40][6]];
var wkuldeep = [squad[41][0],squad[41][6]];
var wunadkat = [squad[42][0],squad[42][6]];
var wchahal = [squad[43][0],squad[43][6]];
var wtahir = [squad[44][0],squad[44][6]];

var allwkt = [wyuvraj,wpollard,whardik,wharbhajan,wbumrah,wmclaneghan,whazlewood,wakila,wishant,
wjadeja,wbravo,wjohnson,washwin,wstarc,wphangiso,wumesh,
wmaxwell,whenriqueses,wstokes,waxar,wbk,wboult,wkuldeep,wunadkat,wchahal,wtahir];

var wkts = [];

sortwkt();
sortingw();


function sortwkt()
{
	for(var l=0;l<allwkt.length;l++)
	{
		wkts[l] = allwkt[l][1];
	}
	wkts.sort(function(a, b){return b-a});
}
function sortingw()
{
	allwkt.sort(function(a,b){return wkts.indexOf(a[1])-wkts.indexOf(b[1])});
}






var eyuvraj = [squad[6][0],squad[6][9]];
var epollard = [squad[7][0],squad[7][9]];
var ehardik = [squad[8][0],squad[8][9]];
var eharbhajan = [squad[9][0],squad[9][9]];
var ebumrah = [squad[10][0],squad[10][9]];
var emclaneghan = [squad[11][0],squad[11][9]];
var ehazlewood = [squad[12][0],squad[12][9]];
var eakila = [squad[13][0],squad[13][9]];
var eishant = [squad[14][0],squad[14][9]];
var ejadeja = [squad[22][0],squad[22][9]];
var ebravo = [squad[23][0],squad[23][9]];
var ejohnson = [squad[24][0],squad[24][9]];
var eashwin = [squad[25][0],squad[25][9]];
var estarc = [squad[26][0],squad[26][9]];
var ephangiso = [squad[27][0],squad[27][9]];
var eumesh = [squad[29][0],squad[29][9]];
var emaxwell = [squad[35][0],squad[35][9]];
var ehenriqueses = [squad[36][0],squad[36][9]];
var estokes = [squad[37][0],squad[37][9]];
var eaxar = [squad[38][0],squad[38][9]];
var ebk = [squad[39][0],squad[39][9]];
var eboult = [squad[40][0],squad[40][9]];
var ekuldeep = [squad[41][0],squad[41][9]];
var eunadkat = [squad[42][0],squad[42][9]];
var echahal = [squad[43][0],squad[43][9]];
var etahir = [squad[44][0],squad[44][9]];

var alleco = [eyuvraj,epollard,ehardik,eharbhajan,ebumrah,emclaneghan,ehazlewood,eakila,eishant,
ejadeja,ebravo,ejohnson,eashwin,estarc,ephangiso,eumesh,
emaxwell,ehenriqueses,estokes,eaxar,ebk,eboult,ekuldeep,eunadkat,echahal,etahir];

var eco = [];

sorteco();
sortinge();


function sorteco()
{
	for(var l=0;l<alleco.length;l++)
	{
		eco[l] = alleco[l][1];
	}
	eco.sort(function(a, b){return a-b});
}
function sortinge()
{
	alleco.sort(function(a,b){return eco.indexOf(a[1])-eco.indexOf(b[1])});
}