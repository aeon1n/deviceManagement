export interface Device {
  id?: number;
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

export async function updateDevice(device: Device): Promise<void> {
  if (device.id === undefined || device.id === null) {
    throw new Error("Device id is required for update.");
  }

  const req = await fetch(`http://localhost:8080/update/${device.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });

  if (!req.ok) {
    throw new Error(`API request failed with status ${req.status}`);
  }
}

export async function deleteDevice(id: number): Promise<void> {
  const req = await fetch(`http://localhost:8080/delete/${id}`, {
    method: "delete",
  });

  if (!req.ok) {
    throw new Error(`API request failed with status ${req.status}`);
  }
}
