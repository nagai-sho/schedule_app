export class User {
  userId: number;
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
      (this.createdAt = new Date()),
      (this.updatedAt = new Date());
  }

  public static reconstruct(params: Partial<User>): User {
    const user = Object.create(User.prototype) as User;
    Object.assign(user, params);
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
