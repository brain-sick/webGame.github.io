
var tiles=document.querySelectorAll(".tile");
var icons=["icons/1.jpg","icons/2.jpg","icons/3.jpg","icons/4.jpg","icons/5.jpg","icons/6.jpg","icons/7.jpg","icons/8.jpg","icons/9.jpg","icons/10.jpg"];
var gifts=["gifts/1.jpg","gifts/2.jpg","gifts/3.jpg","gifts/4.jpg","gifts/5.jpg"];
var startButton=document.getElementById("start");
var h2=document.querySelectorAll("h2");
var container=document.getElementById("container");
var score=document.getElementById("score");
var gift_tile=[];
var g1,g2,g3;
var correct=0,clicked=0;
function result()
{
	for(var i=0;i<tiles.length;i++)
	{
		tiles[i].style.backgroundImage="url(same.jpg)";
		tiles[i].style.backgroundSize="cover";
	}
	for(var i=0;i<tiles.length;i++)
	{
		tiles[i].addEventListener("click",function(){
			if(this.style.opacity!=0.5)
			clicked++;
			this.style.opacity="0.5";
			if(this.id==g1||this.id==g2||this.id==g3)
				{correct++;}
			if(clicked===3)
			{
				displayScore(correct);
			}				
		});

	}
}
function displayScore(x)
{
	
	container.style.display="none";
	document.getElementById("bar").style.display="block";
	if(x==3)
	score.textContent="Congratulation!!! You Got a Win!!";	
	else
	score.textContent="You Lost!! Better Luck Next Time. ";
}
startButton.addEventListener("click",function(){

		startButton.style.display="none";
		for(var i=0;i<h2.length;i++)
		{
			h2[i].style.display="none";
		}
		generateGrid();
		container.style.display="block";
		setTimeout(result,1200);
});
function randomNum(x)
{
	
	var rand=Math.floor(Math.random()*x);
	return rand;
}


function generateGrid(){

for(var i=0;i<tiles.length;i++)
{
	var r=randomNum(10);
	tiles[i].style.backgroundImage="url("+icons[r]+")";
}

var unique=1,p=randomNum(25);
gift_tile.push(p);
for(var i=0;i<tiles.length;i++)
{
	var r=randomNum(10);
	tiles[i].style.backgroundImage="url("+icons[r]+")";
}
while(unique<=2)
{
	p=randomNum(25);
	var flag=0;
	for(var z=0;z<gift_tile.length;z++)
	{
		if(gift_tile[z]===p)
		{
			flag=1;
			break;
		}
	}
	if(flag===0)
	{
		gift_tile.push(p);
		unique++;
	}

}

for(var i=0;i<3;i++)
{
	r=randomNum(5);
	tiles[gift_tile[i]].style.backgroundImage="url("+gifts[r]+")";
	tiles[gift_tile[i]].style.backgroundSize="cover";
	
}
g1=gift_tile[0];
g2=gift_tile[1];
g3=gift_tile[2];

}//end of grid generator


