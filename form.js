function SubmitFormData() {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    $.post("submit.php", { name: name, email: email, message: message },
    function(data) {
	 $('#results').html(data);
    });
}