/* 
  Calculation Functions
  For Coursework Calculator
*/

// Module Calculations
function calculateModules() {
  // Calculate Reading Rate (Total Minutes)
  let readingInput = parseInt(document.getElementById("reading").value);
  let readingTotal = readingInput * 5;
  if (isNaN(readingInput)) {
    return readingInput;
  }

  document.getElementById("readingResults").innerHTML = readingTotal.toFixed(0);

  // Calculate Writing Rate (Total Minutes)
  let writingInput = parseInt(document.getElementById("writing").value);
  let writingTotal = writingInput * 25;
  if (isNaN(writingInput)) {
    return writingInput;
  }

  document.getElementById("writingResults").innerHTML = writingTotal.toFixed(0);

  // Calculate Meeting Hours (Total)
  let meetingInput = parseInt(document.getElementById("meetings").value);
  let meetingHours = parseInt(document.getElementById("meetingHours").value);
  let meetingTotal = meetingInput + meetingHours * 60;
  if (isNaN(meetingHours && meetingInput)) {
    return meetingHours && meetingInput;
  }

  document.getElementById("meetingResults").innerHTML = meetingTotal.toFixed(0);

  // Calculate Discussion Posts (Total Hours)
  let discussionInput = parseInt(document.getElementById("discussions").value);
  let discussionLength = parseInt(document.getElementById("discussMins").value);
  let discussionTotal = (discussionInput * discussionLength) / 60;
  if (isNaN(discussionInput && discussionLength)) {
    return discussionInput && discussionLength;
  }

  document.getElementById("discussionResults").innerHTML =
    discussionTotal.toFixed(0);

  // Calculate Web && Video Hours
  let webInput = parseInt(document.getElementById("webWords").value) / 6;
  let videoInput = parseInt(document.getElementById("videos").value) / 3;
  let webVideoTotal = webInput * videoInput;
  if (isNaN(webInput && videoInput)) {
    return webInput && videoInput;
  }

  document.getElementById("webVideoResults").innerHTML =
    webVideoTotal.toFixed(0);

  // Calculate Practice Hours (Total)
  let practiceInput = parseInt(document.getElementById("practice").value);
  let practiceEstimate = parseInt(document.getElementById("practiceEst").value);
  let practiceTotal = practiceInput + practiceEstimate * 2;
  if (isNaN(practiceInput && practiceEstimate)) {
    return practiceInput && practiceEstimate;
  }

  document.getElementById("practiceResults").innerHTML =
    practiceTotal.toFixed(0);

  // Calculate Exams Hours (Total)
  let examInput = parseInt(document.getElementById("exams").value);
  let examHours = parseInt(document.getElementById("examHours").value);
  let examTotal = examInput + examHours * 2;
  if (isNaN(examInput && examHours)) {
    return examInput && examHours;
  }

  document.getElementById("examResults").innerHTML = examTotal.toFixed(0);

  // Calculate Independent Hours
  let independentTotal =
    (readingTotal + writingTotal) / 60 + webVideoTotal + practiceTotal;

  document.getElementById("independentResults").innerHTML =
    independentTotal.toFixed(0);

  // Calculate Contact Hours
  let contactTotal = discussionTotal + meetingTotal + examTotal / 30;

  document.getElementById("contactResults").innerHTML = contactTotal.toFixed(0);

  // Calculate Total Workload Estimates
  let totalHours = contactTotal + independentTotal / 30;

  document.getElementById("totalResults").innerHTML = totalHours.toFixed(0);
}
