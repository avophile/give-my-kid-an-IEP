/**
 * Letter Generator for IEP Evaluation Request
 * Creates professional evaluation request letters based on form data
 */

/**
 * Main function to generate the complete letter
 */
function generateLetter(data) {
    const sections = {
        header: generateHeader(data),
        recipient: generateRecipient(data),
        subject: generateSubject(data),
        greeting: generateGreeting(data),
        introduction: generateIntroduction(data),
        concerns: generateConcernsSection(data),
        legalBasis: generateLegalBasis(data),
        request: generateRequest(data),
        additionalInfo: generateAdditionalInfo(data),
        timeline: generateTimeline(data),
        contact: generateContact(data),
        closing: generateClosing(data)
    };

    return sections;
}

/**
 * Generate letter header (parent information)
 */
function generateHeader(data) {
    return {
        parentName: data.parentName,
        parentAddress: data.parentAddress,
        parentPhone: data.parentPhone,
        parentEmail: data.parentEmail,
        date: data.currentDate
    };
}

/**
 * Generate recipient information
 */
function generateRecipient(data) {
    const recipients = [];

    // Principal
    recipients.push({
        name: data.principalName,
        title: 'Principal',
        organization: data.schoolName,
        address: data.schoolAddress
    });

    // Special Education Director (if provided)
    if (data.spedDirectorName && data.spedDirectorName.trim() !== '') {
        recipients.push({
            name: data.spedDirectorName,
            title: 'Special Education Director',
            organization: data.districtName,
            address: data.schoolAddress
        });
    }

    return recipients;
}

/**
 * Generate subject line
 */
function generateSubject(data) {
    return `${data.studentName} - Request for Special Education Evaluation`;
}

/**
 * Generate greeting
 */
function generateGreeting(data) {
    const names = [data.principalName];
    if (data.spedDirectorName && data.spedDirectorName.trim() !== '') {
        names.push(data.spedDirectorName);
    }

    if (names.length === 1) {
        return `Dear ${names[0]}:`;
    } else {
        return `Dear ${names.join(' and ')}:`;
    }
}

/**
 * Generate introduction section
 */
function generateIntroduction(data) {
    let intro = `I am writing to formally request a comprehensive special education evaluation for my child, ${data.studentName}`;

    // Add date of birth if provided
    if (data.studentDOB) {
        const dobFormatted = formatInputDate(data.studentDOB);
        intro += ` (date of birth: ${dobFormatted})`;
    }

    intro += `, who is currently in ${data.studentGrade}`;

    // Add teacher if provided
    if (data.currentTeacher && data.currentTeacher.trim() !== '') {
        intro += ` in ${data.currentTeacher}'s class`;
    }

    intro += ' at ' + data.schoolName + '.';

    return intro;
}

/**
 * Generate concerns section
 */
function generateConcernsSection(data) {
    let concernsText = 'Areas of Concern:\n\n';

    // Get selected concern areas
    const concernAreas = data.concernAreas || [];
    if (concernAreas.length > 0) {
        concernsText += 'I have concerns about my child in the following areas:\n';
        concernAreas.forEach(area => {
            concernsText += `• ${formatConcernArea(area)}\n`;
        });
        concernsText += '\n';
    }

    // Add detailed description
    concernsText += 'Specific Concerns:\n\n';
    concernsText += data.concernDescription;

    // Add suspected disability if provided
    if (data.suspectedDisability && data.suspectedDisability.trim() !== '') {
        concernsText += '\n\nBased on these concerns, I suspect my child may have ' + data.suspectedDisability + '.';
    }

    return concernsText;
}

/**
 * Generate legal basis section
 */
function generateLegalBasis(data) {
    return 'Legal Basis:\n\n' +
           'Under the Individuals with Disabilities Education Act (IDEA), 20 U.S.C. § 1414(a)(1)(B), parents have the right to request an evaluation at any time to determine if their child is eligible for special education and related services. The school district must evaluate a child if there is reason to suspect a disability that may require special education services.';
}

/**
 * Generate request section
 */
function generateRequest(data) {
    let requestText = 'Formal Request:\n\n';

    // Type of evaluation
    const evalType = data.evaluationType || 'comprehensive';
    if (evalType === 'comprehensive') {
        requestText += 'I am requesting a comprehensive evaluation in all areas of suspected disability, including but not limited to:\n\n';
    } else if (evalType === 'reevaluation') {
        requestText += 'I am requesting a re-evaluation of my child in all areas of suspected disability, including but not limited to:\n\n';
    } else {
        requestText += 'I am requesting an initial special education evaluation in all areas of suspected disability, including but not limited to:\n\n';
    }

    // List evaluation areas based on concerns
    const concernAreas = data.concernAreas || [];
    const evalAreas = [];

    if (concernAreas.includes('reading') || concernAreas.includes('writing') || concernAreas.includes('math')) {
        evalAreas.push('Academic achievement and educational performance');
    }
    if (concernAreas.includes('attention') || concernAreas.includes('cognitive')) {
        evalAreas.push('Cognitive functioning and executive function');
    }
    if (concernAreas.includes('behavior') || concernAreas.includes('social')) {
        evalAreas.push('Social-emotional functioning and behavior');
    }
    if (concernAreas.includes('speech')) {
        evalAreas.push('Speech and language');
    }
    if (concernAreas.includes('motor')) {
        evalAreas.push('Fine and gross motor skills');
    }
    if (concernAreas.includes('sensory') || concernAreas.includes('adaptive')) {
        evalAreas.push('Adaptive behavior and sensory processing');
    }

    // If no specific areas selected or other was selected, add generic areas
    if (evalAreas.length === 0 || concernAreas.includes('other')) {
        evalAreas.push('All areas related to the suspected disability');
    }

    evalAreas.forEach(area => {
        requestText += `• ${area}\n`;
    });

    requestText += '\nI request that the evaluation be conducted by qualified professionals and include multiple assessments and observations as required by IDEA.';

    // Add consent and meeting requests
    if (data.requestConsent) {
        requestText += '\n\nI request that the school provide me with consent forms for the evaluation immediately so we can begin this process without delay.';
    }

    if (data.requestMeeting) {
        requestText += '\n\nI also request a meeting with the appropriate school staff to discuss my concerns in detail before or during the evaluation process.';
    }

    return requestText;
}

/**
 * Generate additional information section
 */
function generateAdditionalInfo(data) {
    let additionalText = '';

    // Previous support
    if (data.previousSupport && data.previousSupport.trim() !== '') {
        additionalText += 'Previous Interventions and Support:\n\n';
        additionalText += data.previousSupport + '\n\n';
    }

    // Medical diagnosis
    if (data.medicalDiagnosis && data.medicalDiagnosis.trim() !== '') {
        additionalText += 'Medical Information:\n\n';
        additionalText += 'My child has been diagnosed with the following condition(s): ' + data.medicalDiagnosis + '\n\n';
    }

    // Outside evaluations
    if (data.outsideEvaluations && data.outsideEvaluations.trim() !== '') {
        additionalText += 'Outside Evaluations and Services:\n\n';
        additionalText += data.outsideEvaluations + '\n\n';
    }

    // Urgency
    if (data.urgency && data.urgency.trim() !== '') {
        additionalText += 'Urgency:\n\n';
        additionalText += data.urgency + '\n\n';
    }

    return additionalText.trim();
}

/**
 * Generate timeline section
 */
function generateTimeline(data) {
    const days = data.responseTimeline || '10';

    let timelineText = 'Timeline and Next Steps:\n\n';
    timelineText += `Under IDEA, the school district must respond to this request within a reasonable time. I request written confirmation of receipt of this letter and notice of the school's decision regarding this evaluation request within ${days} business days.\n\n`;

    timelineText += 'If the school agrees to evaluate my child, please provide:\n';
    timelineText += '• Written notice of the proposed evaluation\n';
    timelineText += '• Consent forms for me to review and sign\n';
    timelineText += '• Information about the evaluation process and timeline\n';
    timelineText += '• Notice of procedural safeguards (parent rights)\n\n';

    timelineText += 'If the school refuses to evaluate my child, please provide written notice explaining the reason for refusal, as required by 34 CFR § 300.503.';

    return timelineText;
}

/**
 * Generate contact information section
 */
function generateContact(data) {
    const preferredContact = data.preferredContact || 'both';

    let contactText = 'Contact Information:\n\n';

    if (preferredContact === 'email') {
        contactText += `Please contact me via email at ${data.parentEmail} to schedule any meetings or discuss this request.`;
    } else if (preferredContact === 'phone') {
        contactText += `Please contact me via phone at ${data.parentPhone} to schedule any meetings or discuss this request.`;
    } else {
        contactText += `You may reach me at ${data.parentPhone} or ${data.parentEmail} to schedule any meetings or discuss this request.`;
    }

    contactText += ' I am eager to work collaboratively with the school to ensure my child receives appropriate support.';

    return contactText;
}

/**
 * Generate closing section
 */
function generateClosing(data) {
    return 'Thank you for your prompt attention to this matter. I look forward to working together to support my child\'s educational needs.\n\n' +
           'Sincerely,\n\n\n' +
           data.parentName;
}

/**
 * Helper function to format concern areas for display
 */
function formatConcernArea(area) {
    const areaMap = {
        'reading': 'Reading/Literacy',
        'writing': 'Writing',
        'math': 'Mathematics',
        'attention': 'Attention/Focus/ADHD',
        'behavior': 'Behavior/Emotional Regulation',
        'social': 'Social Skills/Peer Relationships',
        'speech': 'Speech/Language/Communication',
        'motor': 'Fine or Gross Motor Skills',
        'sensory': 'Sensory Processing',
        'adaptive': 'Daily Living/Adaptive Skills',
        'cognitive': 'Cognitive/Learning/Memory',
        'other': 'Other concerns (see detailed description)'
    };

    return areaMap[area] || area;
}

/**
 * Helper function to format date strings from form inputs
 */
function formatInputDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Generate plain text version of letter (for preview)
 */
function generatePlainTextLetter(data) {
    const letter = generateLetter(data);

    let text = '';

    // Header
    text += `${letter.header.parentName}\n`;
    text += `${letter.header.parentAddress}\n`;
    text += `${letter.header.parentPhone}\n`;
    text += `${letter.header.parentEmail}\n\n`;
    text += `${letter.header.date}\n\n`;

    // Recipients
    letter.recipient.forEach(recipient => {
        text += `${recipient.name}\n`;
        text += `${recipient.title}, ${recipient.organization}\n`;
        text += `${recipient.address}\n\n`;
    });

    // Subject
    text += `RE: ${letter.subject}\n\n`;

    // Greeting
    text += `${letter.greeting}\n\n`;

    // Body sections
    text += `${letter.introduction}\n\n`;
    text += `${letter.concerns}\n\n`;
    text += `${letter.legalBasis}\n\n`;
    text += `${letter.request}\n\n`;

    if (letter.additionalInfo) {
        text += `${letter.additionalInfo}\n\n`;
    }

    text += `${letter.timeline}\n\n`;
    text += `${letter.contact}\n\n`;
    text += `${letter.closing}\n`;

    return text;
}
