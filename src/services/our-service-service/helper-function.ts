/* eslint-disable no-unexpected-multiline */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { parse } from 'node-html-parser';

export function getFormatedOverview(data: string) {
  const parsedData = parse(data);
  return parsedData.getElementsByTagName('h2').map((node, index) => {
    const title = node.textContent.trim().replace('&amp;', '&');
    const content = parsedData
      .getElementsByTagName('p')
      [index].innerText.trim()
      .replace('&amp;', '&');
    return {
      title,
      content
    };
  });
}
