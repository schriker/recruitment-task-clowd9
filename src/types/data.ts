export interface Data {
  id: number;
  firstName: string | null;
  lastName: string | null;
  userName: string;
  accountType: string;
  createDate: string;
  permissions: string[];
}

export interface TableData {
  fullName: string;
  userName: string;
  accountType: string;
  createDate: string;
  permissions: string[];
}
