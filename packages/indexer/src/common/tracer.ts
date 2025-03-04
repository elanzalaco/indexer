import tracer from "dd-trace";

import { getServiceName } from "@/config/network";
import { config } from "@/config/index";

if (process.env.DATADOG_AGENT_URL) {
  const service = getServiceName();

  tracer.init({
    profiling: true,
    logInjection: true,
    runtimeMetrics: true,
    clientIpEnabled: true,
    service,
    url: process.env.DATADOG_AGENT_URL,
    env: config.environment,
    samplingRules: [
      {
        service: `${service}-postgres`,
        sampleRate: 0,
      },
      {
        service: `${service}-redis`,
        sampleRate: 0,
      },
      {
        service: `${service}-amqp`,
        sampleRate: 0,
      },
      {
        service: `${service}-elasticsearch`,
        sampleRate: 0,
      },
    ],
  });

  tracer.use("hapi", {
    headers: ["x-api-key", "referer"],
  });

  tracer.use("ioredis", {
    enabled: false,
  });

  tracer.use("amqplib", {
    enabled: false,
  });

  tracer.use("pg", {
    enabled: false,
  });

  tracer.use("elasticsearch", {
    enabled: false,
  });
}

export default tracer;
