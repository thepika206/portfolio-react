const baseUrl = (process.env.REACT_APP_MEDIA_BASE_URL || '').replace(/\/$/, '');

// Project data stores bare filenames so the media host can change without touching the data.
function mediaUrl(fileName: string): string {
  if (!fileName) return '';
  if (/^https?:\/\//.test(fileName)) return fileName;
  return baseUrl ? `${baseUrl}/${fileName}` : fileName;
}

export { mediaUrl };
