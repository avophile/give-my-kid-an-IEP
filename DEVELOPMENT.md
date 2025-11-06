# Development Guide

## Project Overview

Abolish Kid Jail is a web application that helps parents generate professional demand letters for manifestation determination hearings when their special education student faces disciplinary action.

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

## Project Structure (Proposed)

```
abolish-kid-jail/
├── README.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md
├── LICENSE
├── .gitignore
│
├── docs/                          # Documentation
│   ├── manifestation-determination-guide.md
│   ├── letter-template.md
│   ├── preparing-for-hearing.md
│   └── state-specific/
│       ├── california.md
│       └── ...
│
├── src/                           # Source code
│   ├── index.html                 # Main application page
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── form-handler.js        # Collect user input
│   │   ├── letter-generator.js    # Generate letter content
│   │   └── pdf-generator.js       # Create PDF from content
│   └── templates/
│       └── letter-template.js     # Letter template(s)
│
├── assets/                        # Static assets
│   ├── images/
│   └── fonts/
│
└── tests/                         # Tests
    └── ...
```

## Core Features - MVP

### 1. User Input Form

Collect essential information:
- Parent/guardian name and contact information
- Student name and school information
- District information
- Date(s) of disciplinary action
- Type of disciplinary action (suspension, expulsion recommendation, etc.)
- Number of days (if suspension)
- Brief description of the incident
- Student's disability category (optional, for context)
- Current IEP date

### 2. Letter Generation

Template should include:
- Professional letterhead-style formatting
- Date
- Addressed to appropriate school officials (principal, special education director)
- Clear subject line: "Demand for Manifestation Determination Review"
- Body paragraphs:
  - Statement of facts (what happened, when, disciplinary action taken)
  - Citation of legal requirement under IDEA
  - Explicit demand for manifestation determination hearing
  - Timeline reference (must occur within 10 school days)
  - Request for student's educational records relevant to the hearing
  - Parent's contact information for scheduling
  - Statement preserving all rights under IDEA
- Professional closing
- Parent signature line

### 3. PDF Export

- Generate clean, printable PDF
- Include proper formatting
- Ensure accessibility (screen reader compatible)
- Option to download or print directly

### 4. Educational Resources

Simple pages explaining:
- What is a manifestation determination hearing?
- When is it required?
- What happens during the hearing?
- What rights do parents have?
- How to prepare
- What to do if you disagree with the outcome

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
