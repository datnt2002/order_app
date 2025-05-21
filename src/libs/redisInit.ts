import { createClient, RedisClientType } from "redis";
import configs from "../configs";

let redisClient: RedisClientType | null = null;

export async function initializeRedis() {
  if (redisClient && redisClient.isOpen) {
    return;
  }

  redisClient = createClient({
    url: configs.redis.url,
  });

  redisClient.on("error", (err) => console.log("Redis redisClient Error", err));

  await redisClient.connect();
}

export function getRedisClient() {
  if (!redisClient) {
    throw new Error("Redis client is not initialized");
  }
  return redisClient;
};

export async function closeRedis() {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}
