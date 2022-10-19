/* Battle Game Project 10/17/22 */

document.getElementById("button").onclick = vampireBattle;

function vampireBattle() {
	//clear old messages from previous games
	document.getElementById("result").innerHTML = "";
	document.getElementById("death").innerHTML = "";

	//initial prompt for the user
	let action = window.prompt("You are walking through the forest and find an old castle. You enter the castle and a vampire appears!.\n\nDo you FIGHT the vampire?\n\nDo you RUN from the vampire?\n\nDo you BRIBE the vampire?").toUpperCase();

	//switch statement to handle the user's initial choice
	switch(action) {
		case "FIGHT": {
			fightVampire();
			break;
		}

		case "RUN": {
			runVampire();
			break;
		}

		case "BRIBE": {
			bribeVampire();
			break;
		}

		default: {
			//user did not enter valid response to prompt
			window.alert("You entered: " + action + ". That is not a valid choice. Please try again!");
			//run vampireBattle() fx from beginning
			vampireBattle();
			break;
		}
	}
}

//define fightVampire() fx
function fightVampire() {
	let skill = window.prompt("Do you have a wooden stake on you? (YES or NO)").toUpperCase();
	let strong = window.prompt("Are you stronger than a vampire? (YES or NO)").toUpperCase();
	//if statements
	if(skill === "YES" || strong === "YES") {
		document.getElementById("result").innerHTML = "You have what it takes to beat a vampire!!<br/>You live another day!";
		document.getElementById("win").play();
	} else {
		document.getElementById("death").innerHTML = "The vampire has drained you of blood!<br/>You died.";
		document.getElementById("lose").play();
	}


}

//define runVampire() fx
function runVampire() {
	let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
	if(fast === "YES"){
		document.getElementById("result").innerHTML = "You got away from the vampire!<br/>But can you live with your cowardice?";
		document.getElementById("win").play();
	} else {
		document.getElementById("death").innerHTML = "Too slow! The vampire caught you.<br/>You died.";
		document.getElementById("lose").play();
	}
}

//define bribeVampire() fx
function bribeVampire() {
	let blood = window.prompt("You offer the vampire some blood.\nDo you have a spare vial of blood on you? (YES or NO").toUpperCase();
	if(blood === "YES") {
		let vial = window.prompt("That's an odd thing to carry around!\nIs it warm? (YES or NO)").toUpperCase();
			if(vial === "YES") {
				document.getElementById("result").innerHTML = "The vampire accepts your offer!<br/>He lets you leave his castle.";
				document.getElementById("win").play();
			} else {
				document.getElementById("death").innerHTML = "The vampire would rather eat *you*!<br/>He drains your blood.";
				document.getElementById("lose").play();
			}
	} else {
		//user does not have blood
		document.getElementById("death").innerHTML = "Then why would you offer him blood?<br/>The vampire kills you.";
		document.getElementById("lose").play();
	}
}