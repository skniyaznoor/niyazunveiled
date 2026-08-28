import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const writingDirectory = path.join(process.cwd(), 'content/writing');

export function getSortedWritingsData() {
  if (!fs.existsSync(writingDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(writingDirectory);
  const allWritingsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(writingDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data,
      };
    });

  return allWritingsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllWritingSlugs() {
  if (!fs.existsSync(writingDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(writingDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getWritingData(slug) {
  const fullPath = path.join(writingDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
