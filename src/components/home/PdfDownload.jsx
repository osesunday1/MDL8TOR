import React from 'react';
import { jsPDF } from 'jspdf';

const PDFDownload = ({ selections, totalPrice }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Order Summary', 20, 20);

    selections.forEach((item, index) => {
      doc.setFontSize(12);
      doc.text(`${item.name} - ${item.manufacturer} ($${item.price})`, 20, 30 + index * 10);
    });

    doc.setFontSize(14);
    doc.text(`Total Price: $${totalPrice}`, 20, 30 + selections.length * 10 + 10);

    doc.save('order-summary.pdf');
  };

  return (
    <button onClick={generatePDF} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
      Download PDF
    </button>
  );
};

export default PDFDownload;