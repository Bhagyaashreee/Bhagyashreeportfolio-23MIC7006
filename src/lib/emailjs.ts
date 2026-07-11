import emailjs from '@emailjs/browser';

/**
 * Sends a contact form email using the EmailJS SDK.
 * 
 * @param formElement The HTML form element containing the user's data.
 * @returns A promise that resolves when the email is successfully sent.
 */
export const sendContactEmail = async (formElement: HTMLFormElement): Promise<void> => {
  // Debug log to ensure environment variables are loaded
  console.log('EmailJS Debug:', {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  });

  // Initialize EmailJS with the Public Key (required for v4.x)
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);

  // Send the form data
  return emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    formElement
  ).then(() => {
    // Resolve empty on success to match signature
  });
};
