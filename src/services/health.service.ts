export class HealthService {
  static getHealth() {
    return {
      success: true,
      status: "online",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}