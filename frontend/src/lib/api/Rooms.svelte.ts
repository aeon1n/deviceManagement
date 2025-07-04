export interface Room {
  id: number;
  name: string;
  number: string;
}

export async function getRooms(): Promise<Room[]> {
  let res = await fetch("http://localhost:8080/rooms");

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  const data = await res.json();
  return data as Room[];
}
