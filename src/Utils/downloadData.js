import jsPDF from "jspdf";
import "jspdf-autotable"; // Import the autoTable function
export const downloadPDF = (tableData, headers) => {
    const doc = new jsPDF();
    // Convert data into a tabular format in PDF
    doc.autoTable({
      head: [headers],
      body: tableData.map((row) => headers.map((header) => row[header])),
    });
    // Save the PDF file
    doc.save("table_data.pdf");
  };