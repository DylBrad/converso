const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getAllLessons() {
  const response = await fetch(`${apiUrl}/api/lessons`);

  return response.json();
}

export async function getOneLesson(id: string) {
  const response = await fetch(`${apiUrl}/api/lessons/getLesson/?_id=${id}`);

  return response.json();
}

// USERS

export async function createUser(user: any) {
  const response = await fetch(`${apiUrl}/api/user/create`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log('response is', response.json);
  return response.json();
}

export async function logInUser(user: any) {
  const response = await fetch(`${apiUrl}/api/user/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log('response is', response.json);
  return response.json();
}
