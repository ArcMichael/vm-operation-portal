export default function getAnalyticsService(varName: string): string {
  return process.env[varName] || "";
}
