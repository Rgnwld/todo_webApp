interface IPublicUser {
  id: string;
  name: string;
  role?: string;
}

interface IInternalUser {
  id: string;
  name: string;
  role: string;
  password: string;
}
