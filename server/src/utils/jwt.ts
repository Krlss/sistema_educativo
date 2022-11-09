import jwt from "jsonwebtoken";

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, <string>process.env.PRIVATE_KEY, {
    expiresIn: "10d",
  });
}

export function verifyJwt<T>(token: string): T | null {
  try {
    const decoded = jwt.verify(token, <string>process.env.PRIVATE_KEY) as T;
    return decoded;
  } catch (e) {
    return null;
  }
}
