const ttt=document.querySelector(".container");
const winnerText=document.querySelector("#MainTitle");
const btns=document.querySelectorAll(".box");

let turnX=true;
let followMap=[[0,1,2],
			   [3,4,5],
			   [6,7,8],
			   [0,3,6],
			   [1,4,7],
			   [2,5,8],
			   [0,4,8],
			   [2,4,6]
			   ];

btns.forEach((box)=>{

	box.addEventListener("click",()=>{
		turnX=!turnX;

		if(box.classList.contains("disable"))
		{
			return;
		}

		if(turnX)
		{
			box.innerText="O";
		}
		else
		{
			box.innerText="X";
		}
		Check();
		box.classList.add("disable");
	});
});