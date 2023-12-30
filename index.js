function showOptions() {
  var bookingChoice = document.getElementById("bookingChoice");
  var slotContainer = document.getElementById("slotContainer");
  var labeltime = document.getElementById("labeltime");
  var time = document.getElementById("time");

  if (bookingChoice.value === "fullDay") {
    slotContainer.style.display = "none";
    labeltime.style.display = "none";
    time.style.display = "none";
  } else if (bookingChoice.value === "halfDay") {
    slotContainer.style.display = "block";
    labeltime.style.display = "none";
    time.style.display = "none";
  } else if (bookingChoice.value === "hourly") {
    slotContainer.style.display = "none";
    labeltime.style.display = "block";
    time.style.display = "block";
  }
}

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    
    var formData = {
      bookingChoice: document.getElementById("bookingChoice").value,
      userName: document.getElementById("userName").value,
      mobileNumber: document.getElementById("mobileNumber").value,
      email: document.getElementById("email").value,
      noOfPersons: document.getElementById("noOfPersons").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      slot: document.getElementById("slot")
        ? document.getElementById("slot").value
        : null,
    };

    console.log(formData);
  })