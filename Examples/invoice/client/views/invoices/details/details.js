Template.InvoicesDetails.rendered = function() {
	
};

Template.InvoicesDetails.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.InvoicesDetails.helpers({

});

Template.InvoicesDetailsDetailsForm.rendered = function() {
	
	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format").toLowerCase() || "mm/dd/yyyy";

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[autofocus]").focus();
};

Template.InvoicesDetailsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();

		var self = this;

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				

				Router.go("", {});
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();
		Router.go("invoices", {});
	}
});

Template.InvoicesDetailsDetailsForm.helpers({
});
