function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    
    function renderLicenseLink(license) {
      if (!license) {
        return '';
      }
      return `[License](https://opensource.org/licenses/${license})`;
    }
    
    function renderLicenseSection(license) {
      if (!license) {
        return '';
      }
      return `## License
    
    This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.`;
    }
    
    
    function generateMarkdown(data) {
      const licenseBadge = renderLicenseBadge(data.license);
      const licenseLink = renderLicenseLink(data.license);
      const licenseSection = renderLicenseSection(data.license);
      return `# ${data.title}
    
      ${licenseBadge}
      ${licenseLink}
      
      ## Description
      
      ${data.description}
      
      ## Installation
      
      ${data.installation}
    
      ## Usage
    
      ${data.usage}
    
      ## Contribution
    
      ${data.contribution}
    
      ## Test instructions
    
      ${data.test}
    
      ## Info:
    
      ${data.github}
      ${data.email}
      
      ${licenseSection}
      `;
      }
    
    export default generateMarkdown;