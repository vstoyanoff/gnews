const API_ENDPOINT = 'http://localhost:9000';

export async function getNews(topic?: string, pageSize?: number) {
  const url: any = new URL(`${API_ENDPOINT}/news`);

  if (topic || pageSize) {
    const params = [
      ['topic', topic || 'Top Stories'],
      ['page_size', pageSize ? pageSize.toString() : '10'],
    ];

    url.search = new URLSearchParams(params).toString();
  }

  const response = await fetch(url);
  const result = await response.json();

  return result.news;
}

export async function getTopics() {
  const url: any = new URL(`${API_ENDPOINT}/topics`);
  const response = await fetch(url);
  const result = await response.json();

  return result.topics;
}
