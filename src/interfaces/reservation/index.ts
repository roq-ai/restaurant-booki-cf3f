import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  user_id: string;
  table_id: string;
  date: any;
  time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  table?: TableInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  table_id?: string;
}
