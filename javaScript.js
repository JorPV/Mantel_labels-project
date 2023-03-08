// Check if the label contains a QR
	let labelHasQR = true;
	const labelsSelect = document.querySelector('#product-label-layout-id-batch');	
	const inputBtn = document.querySelector('#submit-button-product-label');
	const printBtnDisabled = document.querySelector('#button-disabled');
	const printBtnActive = document.querySelector('#print-button');

	labelsSelect.addEventListener('change', () => {
		if(labelsSelect.options[labelsSelect.selectedIndex].dataset.containsQr == 1) {
			labelHasQR = true;
		} else {
			labelHasQR = false;
		}
		return labelHasQR
	});

	// Check if there is a product without a URL in the form table.
	let productWithoutUrl = false; 

	function checkTableRows (){
		const productLabelForm = document.querySelector('tbody');
		let rows = productLabelForm.querySelectorAll('tr');
		rows = Array.from(rows);
		rows.forEach(product => {
			const warningIcon = document.querySelector('.fa-exclamation-circle');
			if(labelHasQR == true){
				warningIcon.style.visibility = 'visible';
			} else {
				warningIcon.style.visibility = 'hidden';
			}
    		});
  	}
