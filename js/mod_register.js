	$(document).ready(function() {
		$("#register-email").blur(function() {
			var zreg_email = $("#register-email").val();
			$.get("register/email_check.json?f=&email=" + encodeURIComponent(zreg_email),function(data) {
				$("#register-email-feedback").html(data.message);
				if (data.error) {
	                                $("#control-group-email").addClass('error');
				} else {
                                        $("#control-group-email").removeClass('error');
				}
				zFormError("#register-email-feedback",data.error);
			});
		});
		$("#register-password").blur(function() {
			if(($("#register-password").val()).length < 6 ) {
				$("#register-password-feedback").html(aStr['pwshort']);
                                $("#control-group-password").addClass('error');
				zFormError("#register-password-feedback",true);
			}
			else {
				$("#register-password-feedback").html("");
                                $("#control-group-password").removeClass('error');
				zFormError("#register-password-feedback",false);
			}
		});
		$("#register-password2").blur(function() {
			if($("#register-password").val() != $("#register-password2").val()) {
				$("#register-password2-feedback").html(aStr['pwnomatch']);
	                        $("#control-group-password2").addClass('error');
				zFormError("#register-password2-feedback",true);
			}
			else {
				$("#register-password2-feedback").html("");
                                $("#control-group-password2").removeClass('error');
				zFormError("#register-password2-feedback",false);
			}
		});
	});
