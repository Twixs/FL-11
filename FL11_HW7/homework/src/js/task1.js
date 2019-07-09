let minLength = 6;
let email = prompt('Hello! Please enter email:','');
if (email) {
	if (email.length > minLength) {
		if (email=== 'user@gmail.com' || email === 'admin@gmail.com') {
			let password = prompt('Please enter password:','');
			if (password) {
				if (email === 'user@gmail.com' && password === 'UserPass' || 
					email === 'admin@gmail.com' && password === 'AdminPass') {
					let newPasswordConfirmed = confirm('Do you want to change your password?');
					if (newPasswordConfirmed) {
						let passwordCheck = prompt('Please enter the old password','');
						if (email === 'user@gmail.com' && passwordCheck === 'UserPass' || 
							email === 'admin@gmail.com' && passwordCheck === 'AdminPass') {
							let newPassword = prompt('Please enter new password','');
							if (newPassword.length > minLength-1) {
								let verifyPassword = prompt('Please verify new password','');
								if (verifyPassword === newPassword) {
									alert('You have successfully changed your password.');
								} else {
									alert('You wrote the wrong password.');
								}
							} else {
								alert('It\'s too short password. Sorry.');
							}
						} else {
							alert('Wrong password.');
						}
					} else {
						alert('You have failed the change.');
					}
				} else {
					alert('Wrong password.');
				}
			} else {
				alert('Canceled.');
			}
		} else {
			alert('I don\'t know you.');
		}
	} else {
		alert('I don\'t know any emails having name length less than 6 symbols.');
	}
} else {
	alert('Canceled.');
}