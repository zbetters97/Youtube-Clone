export const channels = [
  {
    id: "30S60T3AYYPG",
    name: "Marquest Brownlee",
    dateJoined: "01-01-2016",
    profileImage: "images/channels/channel-1.jpeg",
    subscriberCount: 15051705,
  },
  {
    id: "YENXKWMP7ZXT",
    name: "Markeplier",
    dateJoined: "01-01-2013",
    profileImage: "images/channels/channel-2.jpeg",
    subscriberCount: 50135443,
  },
  {
    id: "53JYFJGPR1GH",
    name: "SSSniperWolf",
    dateJoined: "01-01-2013",
    profileImage: "images/channels/channel-3.jpeg",
    subscriberCount: 5135443,
  },
  {
    id: "NURBMZDQMF17",
    name: "Veritasium",
    dateJoined: "01-01-2013",
    profileImage: "images/channels/channel-4.jpeg",
    subscriberCount: 30135443,
  },
  {
    id: "76AZUZKTT479",
    name: "CS Dojo",
    dateJoined: "01-01-2013",
    profileImage: "images/channels/channel-5.jpeg",
    subscriberCount: 515443,
  },
  {
    id: "3KVPE24I25EL",
    name: "MrBeast",
    dateJoined: "01-01-2013",
    profileImage: "images/channels/channel-6.jpeg",
    subscriberCount: 105135443,
  },
];

export function getChannel(channelId) {
  const channel =
    channels[channels.findIndex((c) => c.id === channelId)] || channels[0];

  return channel;
}

export function getSubscriberCount(channel) {
  let subCount = channel.subscriberCount;

  if (1000 <= subCount && subCount <= 999999) {
    subCount = (subCount / 1000).toFixed(1) + "k";
  }
  if (999999 < subCount) {
    subCount = (subCount / 1000000).toFixed(1) + "m";
  }

  subCount = subCount.replace(".0", "");
  return subCount;
}
