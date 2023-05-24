const whosOnline = (friends) => {
  let online = [];
  let offline = [];
  let away = [];
  let result = {};

  friends.forEach((element) => {
    if (element.status === "online" && element.lastActivity > 10) {
      element.status = "away";
    }
  });

  friends.forEach((element) => {
    if (element.status === "online") {
      online.push(element.username);
    } else if (element.status === "offline") {
      offline.push(element.username);
    } else if (element.status === "away") {
      away.push(element.username);
    }
  });

  online.length === 0 ? result : (result.online = online);
  offline.length === 0 ? result : (result.offline = offline);
  away.length === 0 ? result : (result.away = away);
  return result;
};

let friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));
