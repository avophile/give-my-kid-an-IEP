# Give My Kid an IEP!

A web application that helps parents request special education evaluations and secure IEPs (Individualized Education Programs) for their children who need support.

## About

This application empowers parents to advocate for their children by generating professional PDF letters that request comprehensive special education evaluations from their school district. Every child who needs support deserves access to special education services - and it starts with a formal evaluation request.

**Breaking Down Barriers to Support** - Many parents don't know they have the right to request an evaluation, or they struggle with how to make the request in writing. This tool makes it simple and professional, helping families access the support their children need to succeed.

## What is an IEP Evaluation?

An IEP evaluation is a **free, comprehensive assessment** that determines whether your child is eligible for special education services under the Individuals with Disabilities Education Act (IDEA).

### The Process

1. **Parent Requests Evaluation** - You submit a written request to the school (this tool helps you do that!)
2. **School Responds** - School must respond within a reasonable time (typically 10-15 business days)
3. **Consent and Evaluation** - You sign consent forms, and school conducts evaluation (60 days in most states)
4. **Eligibility Meeting** - Team meets to determine if your child qualifies for an IEP
5. **IEP Development** - If eligible, an IEP is created with goals, services, and accommodations

### Why This Matters

- **Every child deserves support** - If your child is struggling, they have a right to be evaluated
- **It's completely free** - The school must evaluate at no cost to you
- **You have legal rights** - IDEA gives parents the power to request evaluation at any time
- **Early intervention helps** - Getting support early can prevent larger struggles later
- **IEPs provide crucial support** - Specialized instruction, accommodations, and services can transform your child's education

### Who Should Request an Evaluation

Consider requesting an evaluation if your child:
- Struggles academically despite interventions
- Has difficulty with attention, focus, or behavior
- Has been diagnosed with ADHD, autism, dyslexia, or other conditions
- Shows significant delays in reading, writing, or math
- Has speech/language difficulties
- Struggles with social skills or emotional regulation
- Has sensory processing challenges
- Has difficulty with motor skills (fine or gross)
- Is falling behind grade-level expectations
- Would benefit from specialized support

## Using the Application

### Live Application
🌐 **[Use the tool now](https://give-my-kid-an-IEP.netlify.app)**

### How It Works

1. **Fill out the form** with your information:
   - Your contact information
   - Your child's information (name, grade, date of birth)
   - School and district information
   - Areas of concern (reading, behavior, speech, etc.)
   - Description of your child's challenges
   - Any previous support or diagnoses (optional)

2. **Generate your letter** - Click the button and the application creates a professional evaluation request letter based on federal IDEA requirements

3. **Download the PDF** - A professionally formatted PDF is generated and downloaded to your device

4. **Send to the school** - Print or email the letter to your school principal and special education director (certified mail recommended)

5. **What to expect** - Use our resources pages to understand the evaluation process and your rights

### Privacy & Security

**Your data stays private.** This application runs entirely in your web browser. No information is sent to any server or database. Everything happens on your device, ensuring complete privacy and security.

## How This App Helps

This application guides parents through generating a professional, legally-informed evaluation request letter that:

- Clearly invokes your rights under IDEA to request evaluation
- Describes your concerns about your child's learning and development
- Requests specific areas of assessment based on your concerns
- Requests timely response and consent forms from the school
- References relevant special education law
- Protects your rights as a parent throughout the process

## Features

✅ **Current Features**
- Comprehensive questionnaire covering all areas of potential disability
- Checkbox selection for areas of concern (reading, math, behavior, speech, etc.)
- Detailed description fields with grammar-checking support
- Optional fields for medical diagnoses and previous interventions
- Automatic letter generation based on parent input
- Professional PDF export for printing and delivery to school
- Educational resources about IEP evaluation rights and process
- Step-by-step guide on what to expect during the evaluation
- Complete privacy - all processing happens in your browser (no data sent to servers)
- Mobile-responsive design
- Keyboard accessible
- Free and open source

🔮 **Planned Enhancements**
- State-specific timeline information
- Multiple language support
- Follow-up letter templates (if school refuses, requesting IEP meeting, etc.)
- Printable checklists for preparing for eligibility meetings
- Sample questions to ask during the evaluation process

## The Bigger Picture

Millions of children with disabilities struggle in school without proper support. Many parents don't realize they have the right to request a free evaluation, or they feel intimidated by the process. This leads to:

- Students falling further behind academically
- Increased behavioral issues due to frustration
- Loss of confidence and self-esteem
- Long-term negative academic and life outcomes
- Preventable special education referrals in later grades
- Families paying for private evaluations they can't afford

**By helping parents request evaluations early and effectively, we're ensuring students get the support they need to thrive.**

## Get Involved

This is an open-source advocacy tool. Contributions welcome from:
- Parents with experience navigating the IEP evaluation process
- Special education attorneys and advocates
- Special education teachers and school psychologists
- Web developers
- UX designers focused on accessibility
- Anyone passionate about educational equity

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute. See [DEVELOPMENT.md](DEVELOPMENT.md) for technical details.

## Deployment

### Production Deployment

This application is deployed on **Netlify** with automatic deployments from the `main` branch.

### Local Development

To run locally:
1. Clone this repository
2. Open `index.html` in a web browser
3. That's it! No build process or dependencies needed.

### Deploying Your Own Instance

#### Option 1: Deploy to Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/avophile/give-my-kid-an-IEP)

**Or manually:**

1. Fork this repository
2. Sign up for a free [Netlify account](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your forked repository
5. Configure build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (root)
6. Click "Deploy site"
7. Your site will be live at `https://YOUR-SITE-NAME.netlify.app`

**Benefits of Netlify:**
- ✅ Free SSL certificates (HTTPS)
- ✅ Automatic deployments on git push
- ✅ Deploy previews for pull requests
- ✅ Custom domains support
- ✅ Edge CDN for fast global delivery
- ✅ Security headers configured via `netlify.toml`

#### Option 2: Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/ (root)` folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/give-my-kid-an-IEP/`

#### Option 3: Deploy Anywhere

This is a static site with no build process. You can host it on:
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static web hosting service

Simply upload all files to your hosting provider.

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **PDF Generation**: jsPDF (loaded via CDN)
- **Hosting**: Netlify (or GitHub Pages, or any static host)
- **Privacy**: 100% client-side - no backend, no data collection
- **Configuration**: `netlify.toml` for Netlify-specific settings
- **Grammar Support**: Compatible with Grammarly and LanguageTool browser extensions

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

This software is provided for educational and advocacy purposes and does not constitute legal advice.

## Support

If you find this tool helpful:
- ⭐ Star this repository
- 🔗 Share it with other parents who need it
- 📝 Contribute improvements
- 💬 Spread awareness about IEP evaluation rights
- ☕ [Support on Ko-fi](https://ko-fi.com/givemykidaniep)

## Additional Resources

### National Organizations
- [Wrightslaw - Special Education Law and Advocacy](https://www.wrightslaw.com/)
- [Council of Parent Attorneys and Advocates (COPAA)](https://www.copaa.org/)
- [Parent Center Hub - Find Your State's PTI](https://www.parentcenterhub.org/find-your-center/)
- [Understood.org - Learning and Thinking Differences](https://www.understood.org/)
- [National Center for Learning Disabilities](https://www.ncld.org/)

### Federal Resources
- [U.S. Department of Education - IDEA](https://sites.ed.gov/idea/)
- [Center for Parent Information and Resources](https://www.parentcenterhub.org/)

### Disability-Specific Organizations
- **ADHD:** [CHADD](https://chadd.org/)
- **Autism:** [Autism Society](https://autism-society.org/), [ASAN](https://autisticadvocacy.org/)
- **Dyslexia:** [International Dyslexia Association](https://dyslexiaida.org/)
- **Intellectual Disabilities:** [The Arc](https://thearc.org/)

---

*"Every child deserves the support they need to learn and thrive. Knowledge of your rights is the first step to securing that support."*
