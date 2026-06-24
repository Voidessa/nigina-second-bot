// Google Apps Script code for Google Sheets integration
// Paste this code into Extensions -> Apps Script inside your Google Sheet

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Build the row layout in order:
    // Timestamp, Name, Phone, Telegram, Age & Profile, Motivation, Previous Courses, Income, Readiness
    var row = [
      new Date(), // Date/Time of submission
      data.name || "",
      data.phone || "",
      data.telegram || data.instagram || "",
      data.profile || "",
      data.motivation || "",
      data.courses || "",
      data.income || "",
      data.readiness || ""
    ];
    
    // Append the new row to the sheet
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data successfully written to Google Sheet"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
