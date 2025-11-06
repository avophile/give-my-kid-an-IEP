# Development Guide

## Project Overview

Give My Kid an IEP is a web application that helps parents generate professional evaluation request letters to request special education evaluations for their children under federal IDEA law.

## Technical Architecture (Proposed)

### Stack Options

The application should be:
- **Accessible**: Works on any device, any browser
- **Simple**: Minimal dependencies, easy to deploy
- **Privacy-focused**: No unnecessary data collection
- **Offline-capable**: Core functionality should work without server if possible

#### Option 1: Static Site with Client-Side Generation
- **Frontend**: HTML, CSS, vanilla JavaScript or lightweight framework
- **PDF Generation**: Client-side library (e.g., jsPDF, pdfmake)
- **Hosting**: GitHub Pages, Netlify, or similar
- **Pros**: Free hosting, no server costs, complete privacy, works offline
- **Cons**: Limited customization, harder to add complex features later

#### Option 2: Simple Server-Side Application
- **Backend**: Python (Flask/FastAPI), Node.js (Express), or similar
- **Frontend**: HTML templates with minimal JavaScript
- **PDF Generation**: Server-side (ReportLab, PDFKit, Puppeteer)
- **Database**: Optional - SQLite for templates and resources
- **Hosting**: Free tier services (Render, Railway, Fly.io)
- **Pros**: More control, easier complex features, better PDF quality
- **Cons**: Requires hosting, privacy considerations

### Recommended Initial Approach

Start with **Option 1** (static site) for MVP, then migrate to Option 2 if needed.

## Project Structure

```
give-my-kid-an-IEP/
├── README.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md
├── NETLIFY_DEPLOYMENT.md
├── LICENSE
├── .gitignore
├── netlify.toml                   # Netlify configuration
│
├── docs/                          # Documentation
│   ├── iep-evaluation-guide.md
│   ├── parent-rights-guide.md
│   └── ...
│
├── index.html                     # Main application page
├── resources.html                 # Educational resources
├── preparing.html                 # What to expect guide
│
├── src/                           # Source code
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── form-handler.js        # Collect user input and form validation
│       ├── letter-generator.js    # Generate letter content from form data
│       └── pdf-generator.js       # Create PDF from content
│
└── _redirects                     # Netlify redirects configuration
```

## Core Features

### 1. User Input Form

Collect essential information:
- Parent/guardian name, address, phone, and email
- Student name, grade level, and date of birth
- School name, address, and principal
- School district name and special education director (optional)
- Areas of concern (reading, math, attention, behavior, social, speech, motor, sensory, cognitive, etc.)
- Detailed description of concerns
- Suspected disability category (optional)
- Previous interventions and support services (optional)
- Medical diagnoses (optional)
- Outside evaluations or therapy (optional)
- Type of evaluation requested (comprehensive, initial, re-evaluation)
- Urgency details (optional)
- Preferred response timeline and contact method

### 2. Letter Generation

Template includes:
- Professional letterhead-style formatting
- Current date
- Addressed to principal and special education director
- Clear subject line: "Request for Comprehensive Special Education Evaluation"
- Body paragraphs:
  - Statement of child's specific areas of concern with examples
  - Reference to parent's legal right to request evaluation under IDEA
  - Description of previous interventions and student's response
  - Any relevant medical diagnoses or outside evaluations
  - Explicit request for evaluation and assessment in all suspected areas
  - Request for consent forms and evaluation timeline
  - Request for pre-evaluation meeting (optional)
  - Parent contact information
  - Statement preserving all parent rights under IDEA
- Professional closing
- Parent signature line

### 3. PDF Export

- Generate clean, professional, printable PDF
- Proper formatting with appropriate margins and spacing
- Accessible to all parents
- Option to download or print directly from browser

### 4. Educational Resources

Pages explaining:
- Parent rights under IDEA to request evaluations
- What the evaluation process entails
- What to expect at each stage
- How to prepare documentation
- Understanding evaluation results
- Next steps after evaluation

## Implementation Phases

### Phase 1: MVP (Minimum Viable Product)
- [ ] Basic HTML form for data collection
- [ ] Single letter template
- [ ] Client-side PDF generation
- [ ] One-page educational explainer
- [ ] Deploy to free hosting

### Phase 2: Enhanced Features
- [ ] Multiple letter templates (initial demand, follow-up, appeal)
- [ ] Form validation and guidance
- [ ] Detailed educational resources
- [ ] State-specific guidance
- [ ] Improved UI/UX

### Phase 3: Advanced Features
- [ ] Save/load draft letters (local storage)
- [ ] Multiple language support
- [ ] Checklist for preparing for hearing
- [ ] Sample documentation templates
- [ ] Parent preparation guide

### Phase 4: Community Features
- [ ] User accounts (optional)
- [ ] Share anonymized success stories
- [ ] Community resources
- [ ] Connection to legal aid organizations

## Design Principles

1. **Privacy First**: Minimize data collection, no unnecessary tracking
2. **Accessibility**: WCAG 2.1 AA compliance minimum
3. **Plain Language**: Avoid legal jargon where possible, explain when necessary
4. **Mobile-First**: Many parents will access on phones
5. **Offline-Capable**: Core features should work without internet
6. **Free Forever**: No paywalls, no premium features that gate critical functionality

## Legal and Ethical Considerations

- **Not Legal Advice**: Clear disclaimers that this tool provides information and generates letters, but doesn't constitute legal advice
- **Accuracy**: All information about IDEA and manifestation determination must be accurate and regularly reviewed
- **Privacy**: No collection of personally identifiable information without explicit consent
- **Security**: If storing any data, proper encryption and security measures
- **Accessibility**: Must be accessible to parents with disabilities

## Testing Priorities

1. **Letter Accuracy**: Generated letters must be legally accurate
2. **PDF Quality**: PDFs must be professional and printable
3. **Cross-Browser**: Test on all major browsers
4. **Mobile**: Test on various screen sizes
5. **Accessibility**: Test with screen readers and keyboard navigation
6. **User Testing**: Real parents must be able to use it easily

## Getting Started with Development

1. Clone the repository
2. Choose your development approach (static or server-side)
3. Set up local development environment
4. Review letter template in `docs/letter-template.md`
5. Start with the form interface
6. Implement letter generation
7. Add PDF export
8. Test thoroughly
9. Deploy

## Resources for Developers

### PDF Generation Libraries
- **Client-side**: jsPDF, pdfmake, PDF-lib
- **Server-side**: ReportLab (Python), PDFKit (Node.js), Puppeteer (Node.js)

### Legal Resources
- [IDEA regulations (34 CFR 300)](https://sites.ed.gov/idea/regs/b/e/300.530)
- [Wrightslaw - Manifestation Determination](https://www.wrightslaw.com/)
- Department of Education guidance documents

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [a11y Project](https://www.a11yproject.com/)

## Questions or Ideas?

Open an issue or start a discussion!
