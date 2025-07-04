export interface Device {
  id: number;
  name: string;
  ip: string;
  os: string;
  roomId: number | null;
  roomName: string | null;
  status: string;
}
