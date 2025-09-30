import DOMPurify from 'dompurify';

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The user input string to sanitize
 * @returns Sanitized string safe for use
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Configure DOMPurify to strip all HTML tags for form inputs
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
    KEEP_CONTENT: true // Keep the text content
  }).trim();
};

/**
 * Sanitizes email input specifically
 * @param email - Email string to sanitize
 * @returns Sanitized email
 */
export const sanitizeEmail = (email: string): string => {
  if (!email) return '';
  
  // Remove any HTML and trim
  const sanitized = sanitizeInput(email);
  
  // Basic email validation pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(sanitized) ? sanitized : '';
};

/**
 * Sanitizes phone number
 * @param phone - Phone number to sanitize
 * @returns Sanitized phone number
 */
export const sanitizePhone = (phone: string): string => {
  if (!phone) return '';
  
  // Remove HTML, then keep only digits, spaces, +, -, (, )
  // Hyphen at end of character class to avoid range interpretation
  return sanitizeInput(phone).replace(/[^\d\s+()-]/g, '');
};

/**
 * Validates and sanitizes URL
 * @param url - URL to validate
 * @returns Sanitized URL or empty string if invalid
 */
export const sanitizeUrl = (url: string): string => {
  if (!url) return '';
  
  try {
    const sanitized = sanitizeInput(url);
    const urlObj = new URL(sanitized);
    
    // Only allow http and https protocols
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return '';
    }
    
    return urlObj.href;
  } catch {
    return '';
  }
};

