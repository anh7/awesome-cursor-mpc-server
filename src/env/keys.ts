import { z } from "zod";

// Define the environment schema
const envSchema = z.object({
  OPENAI_API_KEY: z.string().min(1, "OPENAI_API_KEY is required"),
});

// Parse and validate environment variables
export const env = envSchema.parse({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
});

// Export individual keys for convenience
export const { OPENAI_API_KEY } = env; 