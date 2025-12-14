export const getPayeeName = (upiUrl: string): string | null => {
  try {
    return queryUrlParam(upiUrl, 'pn');
  } catch {
    return null;
  }
};
// idk how tf this func even does the shi
export const queryUrlParam = (url: string, key: string): string | null => {
  const queryIndex = url.indexOf('?');
  if (queryIndex === -1) return null;

  const queryString = url.slice(queryIndex + 1);
  const pairs = queryString.split('&');

  for (const pair of pairs) {
    const [k, v] = pair.split('=');
    if (k === key && v) return decodeURIComponent(v.replace(/\+/g, ' '));
  }

  return null;
};
