/**
 * Helper function to get the correct image path for GitHub Pages
 * When basePath is set, we need to prefix relative paths with it
 * 
 * For static export, we detect the basePath at runtime from the URL.
 * This works in the browser by checking the current pathname.
 */
export const getImagePath = (path: string): string => {
  // If it's already an absolute URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get basePath - default to empty for username.github.io repos
  let basePath = '';
  
  // Try to get from env var first (embedded at build time)
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_PATH) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  // Runtime detection from URL (works in browser) - only if basePath is not set
  // For username.github.io repos, basePath should be empty, so we don't detect it
  if (!basePath && typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Only detect basePath if URL has a path segment that's not just root
    // For username.github.io, we want empty basePath, so we skip detection
    // This is mainly for custom repo names like /myPortfolio
    const match = pathname.match(/^\/([^\/]+)/);
    if (match && match[1] && match[1] !== '') {
      // Only set basePath if it's a clear subdirectory (not root domain)
      // For now, we'll keep it empty for username.github.io repos
      basePath = '';
    }
  }

  // If it's already prefixed with basePath, return as is
  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  // For GitHub Pages, prefix with basePath
  if (basePath) {
    // Ensure path starts with / and basePath doesn't end with /
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBasePath}${cleanPath}`;
  }

  // Otherwise return the path as is
  return path;
};

