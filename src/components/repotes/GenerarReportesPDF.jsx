import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const generarReportesPDF = () => {
    const doc = new jsPDF();

    doc.setFillColor(28,41,51);
    doc.rect(0, 0, 220, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.text("lista de productos", doc.internal.pageSize.getWidth() / 2, 18, {align:"center"});
}