/** 
	Only validates the email, contact_num, and student_ID values. 
	More validation shall be done in the back-end.
	It also remembers if a user has registered before.
	Displays different elements according to that.
**/

var $comp_con = document.querySelector('p'),
	$main_form = document.forms.reg_form;

document.body.onload = function() {

	if(/true/g.test(document.cookie)) {
	
		$comp_con.style.display = 'block';
	
	} else {
	
		$main_form.style.display = 'block';
	
	}
	
}

$main_form.addEventListener('submit', function() {

	var a = /\w*@\w*.com$/g.test($main_form.email.value),
		b =  !/\D/g.test($main_form.student_ID.value), 
		c = !/\D/g.test($main_form.contact_num.value);
	
	if(!(a && b && c)) {
	
		event.preventDefault();
		alert('One or more inputs are incorrect');
	
	} else {
	
		document.cookie = 'registered=true; max-age=10000000';
	
	}
	
}); 
