import 'select2';
import IMask from 'imask';

let phoneMask = IMask(
	document.getElementById('phone-input'), {
		mask: '+{7}(000)000-00-00'
	});

$(".form-item__select").select2({
	theme: "classic",
	minimumResultsForSearch: -1,
});

// function init() {
// 	$(document).ready(function() {
// 		$('.form-item__select').select2({
// 			placeholder: 'Select an option'
// 		});
// 	});
//
// }

// export default {
// 	init,
// 	destroy,
// 	openMenu,
// 	closeMenu,
// };
