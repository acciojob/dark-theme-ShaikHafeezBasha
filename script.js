//your code here
let btn=document.getElementById('swap');
btn.addEventListener('click',()=>{
	let main=document.getElementById('app')
	if(main.className=='night'){
		main.className='button_night'
	}
	else{
		main.className='night'
	}
})
