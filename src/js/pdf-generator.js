/**
 * PDF Generator
 * Creates a professional PDF document from the letter data
 */

/**
 * Main function to generate and download PDF
 */
function generatePDF(letterSections, formData) {
    // Access jsPDF from the global window object
    const { jsPDF } = window.jspdf;

    if (!jsPDF) {
        throw new Error('jsPDF library not loaded');
    }

    // Create new PDF document (Letter size: 8.5" x 11")
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter'
    });

    // Page settings
    const pageWidth = 8.5;
    const pageHeight = 11;
    const margin = 1;
    const contentWidth = pageWidth - (2 * margin);
    let yPosition = margin;

    // Font settings
    const normalFont = 'times';
    const normalSize = 12;
    const lineHeight = 0.2;

    doc.setFont(normalFont, 'normal');
    doc.setFontSize(normalSize);

    /**
     * Helper function to add text with word wrapping
     */
    function addText(text, fontSize = normalSize, fontStyle = 'normal', addSpace = true) {
        doc.setFontSize(fontSize);
        doc.setFont(normalFont, fontStyle);

        const lines = doc.splitTextToSize(text, contentWidth);

        // Check if we need a new page
        if (yPosition + (lines.length * lineHeight) > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
        }

        doc.text(lines, margin, yPosition);
        yPosition += lines.length * lineHeight;

        if (addSpace) {
            yPosition += lineHeight * 0.5;
        }
    }

    /**
     * Add section with heading
     */
    function addSection(heading, content, addSpace = true) {
        // Add heading
        if (heading) {
            addText(heading, normalSize, 'bold', false);
            yPosition += lineHeight * 0.3;
        }

        // Add content
        addText(content, normalSize, 'normal', addSpace);
    }

    /**
     * Add spacing
     */
    function addSpacing(amount = 1) {
        yPosition += lineHeight * amount;
    }

    // Generate the letter content
    const letter = generateLetter(formData);

    // HEADER - Parent Information
    addText(letter.header.parentName, normalSize, 'normal', false);

    // Split address by newlines
    const addressLines = letter.header.parentAddress.split('\n');
    addressLines.forEach(line => {
        addText(line.trim(), normalSize, 'normal', false);
    });

    addText(letter.header.parentPhone, normalSize, 'normal', false);
    addText(letter.header.parentEmail, normalSize, 'normal', false);
    addSpacing(2);

    // DATE
    addText(letter.header.date, normalSize, 'normal', true);
    addSpacing(1);

    // RECIPIENTS
    letter.recipient.forEach((recipient, index) => {
        addText(recipient.name, normalSize, 'normal', false);
        addText(`${recipient.title}, ${recipient.organization}`, normalSize, 'normal', false);

        const recipientAddressLines = recipient.address.split('\n');
        recipientAddressLines.forEach(line => {
            addText(line.trim(), normalSize, 'normal', false);
        });

        if (index < letter.recipient.length - 1) {
            addSpacing(1);
        }
    });
    addSpacing(2);

    // SUBJECT LINE
    addText(`RE: ${letter.subject}`, normalSize, 'bold', true);
    addSpacing(1);

    // GREETING
    addText(letter.greeting, normalSize, 'normal', true);
    addSpacing(1);

    // INTRODUCTION & STATEMENT OF FACTS
    const factsLines = letter.facts.split('\n\n');
    factsLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });
    addSpacing(1);

    // LEGAL REQUIREMENT
    const legalLines = letter.legal.split('\n\n');
    legalLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });
    addSpacing(1);

    // DEMAND
    const demandLines = letter.demand.split('\n\n');
    demandLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });
    addSpacing(1);

    // REQUIRED INFORMATION
    const recordsLines = letter.records.split('\n\n');
    recordsLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });
    addSpacing(1);

    // TIMELINE
    const timelineLines = letter.timeline.split('\n\n');
    timelineLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });
    addSpacing(1);

    // PRESERVATION OF RIGHTS
    const rightsLines = letter.rights.split('\n\n');
    rightsLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });
    addSpacing(1);

    // CLOSING
    const closingLines = letter.closing.split('\n\n');
    closingLines.forEach(paragraph => {
        if (paragraph.trim()) {
            addText(paragraph.trim(), normalSize, 'normal', true);
        }
    });

    // Add signature space
    addSpacing(3);

    // Add signature line
    doc.setLineWidth(0.01);
    doc.line(margin, yPosition, margin + 3, yPosition);
    addSpacing(0.5);
    addText(letter.header.parentName, normalSize, 'normal', false);
    addText(letter.header.date, normalSize, 'normal', false);

    // Generate filename
    const studentNameSafe = formData.studentName.replace(/[^a-z0-9]/gi, '_');
    const dateStamp = new Date().toISOString().split('T')[0];
    const filename = `Manifestation_Determination_Demand_${studentNameSafe}_${dateStamp}.pdf`;

    // Save the PDF
    doc.save(filename);

    return filename;
}

/**
 * Generate PDF preview (returns blob URL instead of downloading)
 */
function generatePDFPreview(letterSections, formData) {
    const { jsPDF } = window.jspdf;

    if (!jsPDF) {
        throw new Error('jsPDF library not loaded');
    }

    // Use same generation logic but return blob instead of saving
    // This could be used for a preview feature in the future
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter'
    });

    // ... (same PDF generation code as above)

    const blob = doc.output('blob');
    return URL.createObjectURL(blob);
}
