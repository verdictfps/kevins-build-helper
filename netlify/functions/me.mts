import jwt from "jsonwebtoken";
import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const cookie = event.headers.cookie || "";
  const match = cookie.match(/auth=([^;]+)/);

  if (!match) {
    return {
      statusCode: 401,
      body: JSON.stringify(null)
    };
  }

  try {
    const user = jwt.verify(
      match[1],
      process.env.JWT_SECRET!
    );

    return {
      statusCode: 200,
      body: JSON.stringify(user)
    };
  } catch {
    return {
      statusCode: 401,
      body: JSON.stringify(null)
    };
  }
};