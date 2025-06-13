function sendWhatsAppInvite(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var email = sheet.getRange(lastRow, 2).getValue().toString().trim(); 
  var statusCell = sheet.getRange(lastRow, 3); 


  if (!/@.+\.ac\.uk$/.test(email)) {
    Logger.log("Not a student: " + email);
    statusCell.setValue("Blocked");
    return;
  }


  var allEmails = sheet.getRange(2, 2, lastRow - 1).getValues().flat(); 
  var matching = allEmails.filter((e, i) => e.toLowerCase() === email.toLowerCase());

  if (matching.length > 1) {
    Logger.log("Duplicate email: " + email);
    statusCell.setValue("Duplicate");
    return;
  }

 
  var subject = "Welcome to our WhatsApp group!";
  var message = `
Hi there!

Thank you for verifying your university email.
Here is your invitation link to our official WhatsApp group:

👉 https://chat.whatsapp.com/link //put your whatsuplink here

See you inside!
  `;

  MailApp.sendEmail(email, subject, message);
  statusCell.setValue("Sent");
  Logger.log("Sent to: " + email);
}
