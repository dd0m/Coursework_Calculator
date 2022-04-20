/* 
    Calculations Modules
*/

// Calculate Reading Rate (Total Minutes)
function getReadingRate() { 
  let readingInput = parseInt(document.getElementById("reading").value);
  let readingTotal = readingInput * 5;
  if (isNaN(readingInput)) {
    return readingInput;
  }

  document.getElementById("readingResults").innerHTML = readingInput + readingTotal;
}

// Calculate Writing Rate (Total Minutes)
function getWritingRate() {
  let writingInput = parseInt(document.getElementById("writing").value);
  let writingTotal = writingInput * 25;
  if (isNaN(writingInput)) {
    return writingInput;
  }

  document.getElementById("writingResults").innerHTML = writingInput + writingTotal;
}

// Calculate Discussion Posts (Total Hours)
function getDiscussionRate() {
  let discussionInput = parseInt(document.getElementById("discussions").value);
  let discussionLength = parseInt(document.getElementById("discussMins").value);
  let discussionTotal = discussionInput * discussionLength / 60;
    if (isNaN(discussionInput && discussionLength)) {
      return discussionInput && discussionLength;
  }

  document.getElementById("discussionResults").innerHTML = discussionTotal;
}

// Calculate Web && Video Hours
function getWebVideoRate() {
  let webInput = parseInt(document.getElementById("webWords").value) / 60;
  let videoInput = parseInt(document.getElementById("videos").value) / 60;
  let webVideoTotal = webInput * videoInput;

  document.getElementById("webVideoResult").innerHTML = webVideoTotal;
}

// Calculate Practice Hours (Total)
function getPracticeRate() {
  let practiceInput = parseInt(document.getElementById("practice").value);
  let practiceEstimate = parseInt(document.getElementById("practiceEst").value);
  let practiceTotal = practiceInput + practiceEstimate;

  document.getElementById("practiceResults").innerHTML = practiceTotal;
}

// Calculate Exams Hours (Total)
function getExamTotal() {
  let examInput = parseInt(document.getElementById("exams").value);
  let examHours = parseInt(document.getElementById("examsHours").value);
  let examTotal = examInput * examHours / 60;

  
}

// Calculate Meeting Hours (Total)
function getMeetingTotal(){
  let meetingInput = parseInt(document.getElementById("meetings").value);
  let meetingHours = parseInt(document.getElementById("meetingHours").value);
  let meetingTotal = meetingInput * meetingHours / 60;

  document.getElementById("meetingResults").innerHTML = meetingTotal;
}

// Calculate Total Hours
function getTotalHours() {
  let hoursSum = parseInt(document.getElementById("hours").value);
  let totalSum = parseInt(document.getElementById("totalHours").value);

}

// Calculate Independent Hours


// Calculate Contact Hours