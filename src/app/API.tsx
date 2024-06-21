const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getLessons() {
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
  return response.json();
}

// CARDS
export async function getAllCardStacks() {
  const response = await fetch(`${apiUrl}/api/cards`);

  return response.json();
}

export async function getOneCardStack(id: string) {
  const response = await fetch(`${apiUrl}/api/cards/getStack/?_id=${id}`);

  return response.json();
}

export async function addCardToUser(usersId: string, data: object) {
  const response = await fetch(`${apiUrl}/api/cards/add/?_id=${usersId}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

export async function getAllUsersCards(usersId: string) {
  const response = await fetch(
    `${apiUrl}/api/cards/usersCards/?_id=${usersId}`,
  );

  return response.json();
}
