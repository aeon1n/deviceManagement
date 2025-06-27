export interface Device {
  name: string;
  ip: string;
  os: string;
  roomId: number | null;
  roomName: string | null;
  status: string;
}
