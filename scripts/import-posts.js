const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService({ headingStyle: 'atx' });

async function importPosts() {
  console.log('Fetching posts from niyazunveiled.com...');
  try {
    const res = await fetch('https://www.niyazunveiled.com/feeds/posts/default?alt=json&max-results=50');
    const data = await res.json();
    const entries = data.feed.entry || [];

    console.log(`Found ${entries.length} posts.`);

    entries.forEach(entry => {
      const title = entry.title.$t;


      const published = entry.published.$t; // e.g. "2024-09-09T10:01:00.003-07:00"
      const contentHtml = entry.content ? entry.content.$t : '';
      
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      const markdownContent = turndownService.turndown(contentHtml);

      // Extract a short excerpt (first 100 characters of plain text)
      let excerpt = markdownContent.replace(/[#*_[\]>]/g, '').substring(0, 150).replace(/\n/g, ' ').trim();
      if (excerpt.length >= 150) excerpt += '...';

      // Infer category from labels
      let category = 'Short Story';
      if (entry.category) {
        const labels = entry.category.map(c => c.term).join(', ');
        if (labels.toLowerCase().includes('poem') || labels.toLowerCase().includes('poetry')) {
            category = 'Poem';
        }
      } else {
         if (title.toLowerCase().includes('poem')) category = 'Poem';
      }

      const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${published}"
category: "${category}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
---

`;

      const finalMarkdown = frontmatter + markdownContent;
      const outputPath = path.join(__dirname, '../content/writing', `${slug}.md`);

      fs.writeFileSync(outputPath, finalMarkdown);
      console.log(`Imported: ${title} -> ${slug}.md`);
    });

    console.log('Import complete!');
  } catch (err) {
    console.error('Error importing posts:', err);
  }
}

importPosts();
