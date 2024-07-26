import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Sample data to pass to the template
const resumeData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    experience: ['Software Engineer at ABC Corp', 'Web Developer at XYZ Inc']
};

// Route to render the resume template
app.get('/', (req, res) => {
    res.render('resume', resumeData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
