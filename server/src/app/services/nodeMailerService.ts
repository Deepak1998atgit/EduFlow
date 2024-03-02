import { NodeMailService } from "../../frameworks/services/nodeMailservice";

export const nodemailerServiceInterface :any  = (
  service: ReturnType<NodeMailService>
) => {
  const sendmailWithPassword = async (generatedPassword:string) => await service.sendPassword(generatedPassword);

  return {
    sendmailWithPassword,
  };
};

export type NodemailerServiceInterface = typeof nodemailerServiceInterface;