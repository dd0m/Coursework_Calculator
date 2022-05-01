/* 
  Download PDF Function
  For Coursework Calculator
*/

 function generatePDF() {
    var element = document.getElementById("totalPDF");
    var opt = {
      margin:       1,
      filename:     'pdf.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 3 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
 }
