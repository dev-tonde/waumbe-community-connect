import { useState, useCallback } from 'react';
import DOMPurify from 'dompurify';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => string | null;
}

interface FieldValidation {
  [key: string]: ValidationRule;
}

export const useFormValidation = (validationRules: FieldValidation) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = useCallback((fieldName: string, value: string): string | null => {
    const rules = validationRules[fieldName];
    if (!rules) return null;

    // Sanitize input
    const sanitizedValue = DOMPurify.sanitize(value.trim());

    // Required validation
    if (rules.required && !sanitizedValue) {
      return `${fieldName} is required`;
    }

    // Skip other validations if field is empty and not required
    if (!sanitizedValue && !rules.required) {
      return null;
    }

    // Length validations
    if (rules.minLength && sanitizedValue.length < rules.minLength) {
      return `${fieldName} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && sanitizedValue.length > rules.maxLength) {
      return `${fieldName} must be no more than ${rules.maxLength} characters`;
    }

    // Email validation
    if (rules.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedValue)) {
        return 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (rules.phone) {
      const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(sanitizedValue)) {
        return 'Please enter a valid phone number';
      }
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(sanitizedValue)) {
      return `${fieldName} format is invalid`;
    }

    // Custom validation
    if (rules.custom) {
      return rules.custom(sanitizedValue);
    }

    return null;
  }, [validationRules]);

  const validateForm = useCallback((formData: { [key: string]: string }) => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const value = formData[fieldName] || '';
      const error = validateField(fieldName, value);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validateField]);

  const validateSingle = useCallback((fieldName: string, value: string) => {
    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error || ''
    }));
    return !error;
  }, [validateField]);

  const setFieldTouched = useCallback((fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  }, []);

  const sanitizeInput = useCallback((value: string): string => {
    return DOMPurify.sanitize(value.trim());
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  return {
    errors,
    touched,
    validateForm,
    validateSingle,
    setFieldTouched,
    sanitizeInput,
    clearErrors
  };
};