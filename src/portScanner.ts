export const commonPorts = [
  { port: 21, service: "FTP" },
  { port: 22, service: "SSH" },
  { port: 25, service: "SMTP" },
  { port: 53, service: "DNS" },
  { port: 80, service: "HTTP" },
  { port: 443, service: "HTTPS" }
];

export function getCommonPorts() {
  return commonPorts;
}
