var pageSession = new ReactiveDict();

pageSession.set("errorMessage", "");
pageSession.set("resetPasswordSent", "");

Template.ForgotPassword.rendered = function() {
	
	$("input[autofocus]").focus();
};

Template.ForgotPassword.events({
	// send reset password link
	'submit #forgot_password_form' : function(e, t) {
		e.preventDefault();

		var submit_button = $(t.find(":submit"));
		var reset_email = t.find('#reset_email').value.trim();

		// check email
		if(!isValidEmail(reset_email))
		{
			pageSession.set("errorMessage", "Please enter your e-mail address.");
			t.find('#reset_email').focus();
			return false;
		}

		Accounts.forgotPassword({email: reset_email}, function(err) {
			if (err)
				pageSession.set("errorMessage", err.message);
			else
			{
				pageSession.set("errorMessage", "");
				pageSession.set("resetPasswordSent", true);				
			}
		});

		return false; 
	},

	// button "OK" in information box after reset password email is sent
	'click #reset_password_sent' : function(e, t) {
		pageSession.set("resetPasswordSent", false);
		return true;
	}

});

Template.ForgotPassword.helpers({
	errorMessage: function() {
		return pageSession.get("errorMessage");
	},

	resetPasswordSent: function() {
		return pageSession.get("resetPasswordSent");
	}
});
