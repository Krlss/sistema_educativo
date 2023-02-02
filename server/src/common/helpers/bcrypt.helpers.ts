import * as bcrypt from 'bcrypt';

export async function hash(password: string): Promise<string> {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

export async function compare(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compareSync(password, hash);
}
