

function viewResults() {
	// querySelector('[data-content]').innerHTML = html
	let list = document.createElement('div')
	list.innerHTML=`
	<div class='container'>
		<ul class="mx-auto">
			<li>You visited Page1:  ${localStorage.getItem('Page1')} time(s)</li>
			<li>You visited Page2:  ${localStorage.getItem('Page2')} time(s)</li>
			<li>You visited Page3:  ${localStorage.getItem('Page3')} time(s)</li>
		</ul>
	</div>`
	console.log(list)
	let result = document.getElementsByClassName('btn')
	console.log(result)
	document.body.appendChild(list)
	localStorage.clear()
}
function visitLink(path) {
	if(path==='Page1'){
		let currentValue = localStorage.getItem('Page1') ? parseInt(localStorage.getItem('Page1')) : 0;
		let newValue = currentValue + 1;
		localStorage.setItem('Page1', newValue);
	}else if(path==='Page2'){
		let currentValue = localStorage.getItem('Page2') ? parseInt(localStorage.getItem('Page2')) : 0;
		let newValue = currentValue + 1;
		localStorage.setItem('Page2', newValue);
	}else if(path==='Page3'){
		let currentValue = localStorage.getItem('Page3') ? parseInt(localStorage.getItem('Page3')) : 0;
		let newValue = currentValue + 1;
		localStorage.setItem('Page3', newValue);
	}else{
			console.log(`None of this pages were clicked!`)	
	}
}
