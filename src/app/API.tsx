const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getAllLessons() {
  const response = await fetch(`${apiUrl}/api/lessons`);

  return response.json();
}

export async function getOneLesson(id: string) {
  const response = await fetch(`${apiUrl}/api/lessons/getLesson/?_id=${id}`);

  return response.json();
}
