/* =========================================================
   Volunteer form (join.html)
   This site is a school project with no server, so the form
   does not send data anywhere. After the browser checks the
   required fields, we show a thank-you message instead.
   ========================================================= */
(function () {
  var form = document.getElementById("volunteer-form");
  var status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function (event) {
    // Stop the page from reloading
    event.preventDefault();

    // Use the first name only in the thank-you message
    var fullName = document.getElementById("full-name").value.trim();
    var firstName = fullName.split(" ")[0] || "friend";

    status.textContent =
      "Thank you, " + firstName + "! Your volunteer form is complete. " +
      "Because this is a school project, nothing was sent.";
    status.hidden = false;

    form.reset();
  });
})();
