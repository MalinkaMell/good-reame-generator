// function to generate markdown for README
function grabLicense(license) {
	return `[![License](https://img.shields.io/badge/${license.link}-${license.color}.svg)](${license.url})`;
}
function generateMarkdown(data) {
	return `
# ${data.title}

## Description

${data.description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

---

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${grabLicense(data.license)}

## Contributing

${data.contributing}

## Tests

\`\`\`
${data.test}
\`\`\`

## Questions

Please contact me at ${data.email} if you have any questions

`;
}

module.exports = generateMarkdown;
