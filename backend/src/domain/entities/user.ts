export class User {
  userId?: number; // DB側で自動採番するので optional に
  name: string;
  email: string;
  phoneNumber: string | null;
  hashedPassword: string;
  company: string | null;
  postalCode: string | null;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    userId: number | undefined, // optional にしておくと DB 自動採番に対応しやすい
    name: string,
    email: string,
    phoneNumber: string | null,
    hashedPassword: string,
    company: string | null,
    postalCode: string | null,
    address: string | null,
  ) {
    (this.userId = userId),
      (this.name = name),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.hashedPassword = hashedPassword),
      (this.company = company),
      (this.postalCode = postalCode),
      (this.address = address),
      (this.createdAt = new Date()),
      (this.updatedAt = new Date());
  }

  public static reconstruct(
    userId: number,
    name: string,
    email: string,
    phoneNumber: string | null,
    hashedPassword: string,
    company: string | null,
    postalCode: string | null,
    address: string | null,
    createdAt: Date,
    updatedAt: Date,
  ): User {
    const user = Object.create(User.prototype) as User;

    Object.assign(user, {
      userId,
      name,
      email,
      phoneNumber,
      hashedPassword,
      company,
      postalCode,
      address,
      createdAt,
      updatedAt,
    });
    return user;
  }

  public update(
    name: string,
    email: string,
    phoneNumber: string | null,
    hashedPassword: string,
    company: string | null,
    postalCode: string | null,
    address: string | null,
  ) {
    (this.name = name),
      (this.email = email),
      (this.phoneNumber = phoneNumber),
      (this.hashedPassword = hashedPassword),
      (this.company = company),
      (this.postalCode = postalCode),
      (this.address = address),
      (this.updatedAt = new Date());
  }
}
