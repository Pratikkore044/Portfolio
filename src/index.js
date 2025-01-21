  function printPage() {
    window.print();  // Opens the print dialog

    // Log a message to the console (fixed the incorrect reference to function name)
    console.log("Print button clicked");
  }

  // Attach the event listener to the button after defining the function
  document.getElementById("printbutton").addEventListener("click", printPage);

