const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getLesson() {
  console.log('Process environment', process.env);
  const response = await fetch(`${apiUrl}/api/lessons`);
  return response.json();
}
