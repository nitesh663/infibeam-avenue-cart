var infibeamBody = document.querySelector('.infibeam-body');




infibeamBody.addEventListener('click', function(event){
	var item = event.target.classList[0];
	var itemQuantity = event.target.parentNode.parentNode.previousElementSibling;

	if(item == "increment"){
		var incrementInput = event.target.previousElementSibling;
		currentValue = ++incrementInput.value;

		itemQuantity.querySelector('.product-quantity').textContent = currentValue;
		
	} else if(item == "decrement"){
		var decrementInput = event.target.nextElementSibling;
		currentValue = --decrementInput.value;
		
		itemQuantity.querySelector('.product-quantity').textContent = currentValue;
	}
})