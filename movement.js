

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
	var y=document.getElementById('plane').offsetTop;
	y-= 15;
	document.getElementById('plane').style.top= y + "px";

        // up arrow
    }
    else if (e.keyCode == '40') {
	var y=document.getElementById('plane').offsetTop;
	y+= 15;
	document.getElementById('plane').style.top= y + "px";
        // down arrow
    }
    else if(e.keyCode=='37'){
	var x=document.getElementById('plane').offsetLeft;
	x-= 15;
	document.getElementById('plane').style.left= x + "px";
	}
	else if(e.keyCode=='39'){
	var x=document.getElementById('plane').offsetLeft;
	x+= 15;
	document.getElementById('plane').style.left= x + "px";
	
	}

}


function animate() {
	xnow = parseInt(item.style.left);
    item.style.left = (xnow-1)+'px';
    ynow = parseInt(item.style.top);
    item.style.top = (ynow+Math.sin(2*Math.PI*(xnow/30))*10) + "px";
    setTimeout(animate,30);
}

function start() {
  item = document.getElementById('enemy'); 
  item.style.left = '1400px'; 
  item.style.top = '400px';
  animate(); 
}

window.onload = start;






