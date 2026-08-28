const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../content/writing/echoes-of-absence/echoes-of-absence.txt');
const outputPath = path.join(__dirname, '../content/writing/echoes-of-absence.md');

try {
  const data = fs.readFileSync(inputPath, 'utf8');

  let markdown = `---
title: "Echoes of Absence"
date: "2024-05-15"
category: "Serialized Novel"
excerpt: "A deeply emotional serialized novel exploring the delicate intricacies of love, the profound pain of separation, and the desperate search for redemption."
coverImage: "/7007200.jpg"
---

`;

  const lines = data.split('\n');

  let isFirstEpisode = true;

  lines.forEach((line) => {
    let formattedLine = line.trim();
    
    // Ignore empty lines momentarily to check logic, but we want to keep paragraph spacing
    if (formattedLine === '') {
      markdown += '\n';
      return;
    }

    // Convert episode headers
    if (formattedLine.startsWith('S1.EP')) {
        if (!isFirstEpisode) {
             markdown += '\n<br/>\n\n'; // Add some breathing room between chapters
        }
        markdown += `## ${formattedLine}\n\n`;
        isFirstEpisode = false;
        return;
    }

    // Remove redundant episode names like 'Echoes of Absence (S1.EP1)' right after the header
    if (formattedLine.startsWith('Echoes of Absence (S1.EP')) {
        return; 
    }

    // Convert === separators
    if (formattedLine.match(/^={5,}$/)) {
        markdown += '\n***\n\n';
        return;
    }

    // Convert (Emphasized text) into blockquotes
    if (formattedLine.startsWith('(') && formattedLine.endsWith(')')) {
        // Only blockquote if it's a standalone thought, not e.g., "(Clearing throat)"
        if (formattedLine.length > 20) {
            markdown += `> ${formattedLine.substring(1, formattedLine.length - 1)}\n\n`;
            return;
        }
    }

    // Default: just add the line
    markdown += `${formattedLine}\n\n`;
  });

  fs.writeFileSync(outputPath, markdown);
  console.log('Successfully converted echoes-of-absence.txt to echoes-of-absence.md');

} catch (err) {
  console.error('Error processing file:', err);
}
