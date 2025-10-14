/**
 * Get the correct image path with basePath for GitHub Pages deployment
 */
export function getImagePath(imagePath: string): string {
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  // For GitHub Pages deployment, we need the /bulgarianestates prefix
  // For development, we don't need any prefix
  const basePath = isDevelopment ? '' : '/bulgarianestates'
  
  // Ensure the path starts with /
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  
  return `${basePath}${cleanPath}`
}
