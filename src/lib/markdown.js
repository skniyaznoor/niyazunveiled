import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const writingDirectory = path.join(process.cwd(), 'content/writing');

function parseSeriesInfo(title) {
  if (title.toLowerCase().startsWith('love:')) {
    let episode = 1;
    if (title.toLowerCase().includes('your to mine')) episode = 2;
    if (title.toLowerCase().includes('final chapter')) episode = 3;
    return {
      seriesName: 'Love',
      season: 1,
      episode: episode,
      isSeries: true,
    };
  }

  const match = title.match(/(.*?)\s*\(?S(\d+)[:.]?EP:?\s*(\d+)\)?/i);
  if (match) {
    return {
      seriesName: match[1].replace(/[✨❤️💕]/g, '').trim(),
      season: parseInt(match[2], 10),
      episode: parseInt(match[3], 10),
      isSeries: true,
    };
  }
  return { isSeries: false };
}

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
      const seriesInfo = parseSeriesInfo(matterResult.data.title || '');

      return {
        slug,
        ...matterResult.data,
        ...seriesInfo,
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
  const seriesInfo = parseSeriesInfo(matterResult.data.title || '');

  return {
    slug,
    contentHtml,
    ...matterResult.data,
    ...seriesInfo,
  };
}
