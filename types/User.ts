import { Delivery } from "./Delivery";
import { Order } from "./Order";
import { Pet } from "./Pet";

export interface User {
  id: number;
  name: string;
  email?: string;
  phone: string;
  address: string;
}
