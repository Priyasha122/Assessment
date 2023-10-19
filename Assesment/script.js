function Form() {
	var username = document.getElementById('uname').value;
	var password = document.getElementById('password').value;
	if (username.length < 1 || password.length < 1) {
		alert('Please check required fields');
	}
}
