import { NodeMailService } from "../../frameworks/services/nodeMailservice";

export const nodemailerServiceInterface :any  = (
  service: ReturnType<NodeMailService>
) => {
  const sendmailWithPassword = async (generatedPassword: string) => await service.sendPassword(generatedPassword);
  

  const sendEmail = (email: string, subject: string, text: string) => service.sendEmail(email, subject, text);

  return {
    sendmailWithPassword,
    sendEmail
  };
};

export type NodemailerServiceInterface = typeof nodemailerServiceInterface;