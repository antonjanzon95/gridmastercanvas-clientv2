export async function fetchUsers() {
  const response = await fetch(
    'https://gridmastercanvas-apiv2-production.up.railway.app/users'
  );
  const users = await response.json();
  console.log('users', users);
  return users;
}

export function renderUserCount(userCount) {
  const usersOnlineElement = document.querySelector('#users-online');

  if (usersOnlineElement) {
    usersOnlineElement.innerHTML = 'Users online: ' + userCount;
  } else {
    return;
  }
}

export function renderUsers(globalUsers) {
  console.log(globalUsers);
  const users = globalUsers;
  const scrollContainer = document.querySelector('#scroll-container');

  if (!scrollContainer) {
    return;
  }

  scrollContainer.innerHTML = '';

  users.forEach((user) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const colorCircle = document.createElement('div');
    colorCircle.classList.add('user-color-circle');
    colorCircle.style.backgroundColor = user.color;

    const name = document.createElement('p');
    name.textContent = user.name;

    item.appendChild(colorCircle);
    item.appendChild(name);

    scrollContainer.appendChild(item);
  });
}
