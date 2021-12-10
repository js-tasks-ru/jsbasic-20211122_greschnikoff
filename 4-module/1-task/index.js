function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  ul.innerHTML = friends.map(friend => `<li> ${friend.firstName} ${friend.lastName}</li>`).join(' ');
  console.log(ul);
  return ul;
}
