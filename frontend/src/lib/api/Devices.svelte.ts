export interface Device {
  name: string;
  ip: string;
  os: string;
  roomId: number | null;
  roomName?: string | null;
  status: string;
}

export async function getAllDevices(): Promise<Device[]> {
  const response = await fetch("http://localhost:8080/devices");

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();

  return data as Device[];
}

export async function createDevice(device: Device): Promise<void> {
  const req = await fetch("http://localhost:8080/createDevice", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });

  if (!req.ok) {
    throw new Error(`API request failed with status ${req.status}`);
  }
}
