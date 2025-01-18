class Video {
  id;
  authorId;
  title;
  description;
  durationInSeconds;
  thumbnailImage;
  datePosted;
  viewCount;

  constructor(videoDetails) {
    this.id = videoDetails.id;
    this.authorId = videoDetails.authorId;
    this.title = videoDetails.title;
    this.description = videoDetails.description;
    this.durationInSeconds = videoDetails.durationInSeconds;
    this.thumbnailImage = videoDetails.thumbnailImage;
    this.datePosted = videoDetails.datePosted;
    this.viewCount = videoDetails.viewCount;
  }

  getDuration() {
    let formattedTime = "";
    const seconds = this.durationInSeconds;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    hours > 0 && (formattedTime += `${hours}:${hours > 1 ? "" : ""}`);
    minutes > 0 && (formattedTime += `${minutes}:${minutes > 1 ? "" : ""}`);

    formattedTime += `${remainingSeconds}${remainingSeconds > 1 ? "" : ""}`;

    return formattedTime;
  }

  getViewCount() {
    let viewCount = this.viewCount;

    if (1000 <= viewCount && viewCount <= 999999) {
      viewCount = (viewCount / 1000).toFixed(1) + "k";
    }
    if (999999 < viewCount) {
      viewCount = (viewCount / 1000000).toFixed(1) + "m";
    }

    viewCount = viewCount.replace(".0", "");
    return viewCount;
  }
}

const videos = [
  {
    id: "1yq4yr18wwne",
    authorId: "30S60T3AYYPG",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    description: "Test test test test...",
    durationInSeconds: 862,
    thumbnailImage: "images/videos/thumbnail-1.webp",
    datePosted: "07-01-2024",
    viewCount: 3430603,
  },
  {
    id: "xclviukn5xvr",
    authorId: "YENXKWMP7ZXT",
    title: "Try Not to Laugh Challenge #9",
    description: "Test test test test...",
    durationInSeconds: 522,
    thumbnailImage: "images/videos/thumbnail-2.webp",
    datePosted: "10-01-2020",
    viewCount: 19045877,
  },
  {
    id: "31hwdhfnpzef",
    authorId: "53JYFJGPR1GH",
    title: "Crazy Tik Toks Taken Moments Before DISASTER",
    description: "Test test test test...",
    durationInSeconds: 601,
    thumbnailImage: "images/videos/thumbnail-3.webp",
    datePosted: "10-01-2023",
    viewCount: 12000000,
  },
  {
    id: "lsp9kxbokdz5",
    authorId: "NURBMZDQMF17",
    title: "The Simplest Math Problem No One Can Solve",
    description: "Test test test test...",
    durationInSeconds: 553,
    thumbnailImage: "images/videos/thumbnail-4.webp",
    datePosted: "09-01-2024",
    viewCount: 18000000,
  },
  {
    id: "548xtyjsr257",
    authorId: "76AZUZKTT479",
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    description: "Test test test test...",
    durationInSeconds: 1329,
    thumbnailImage: "images/videos/thumbnail-5.webp",
    datePosted: "10-01-2018",
    viewCount: 519000,
  },
  {
    id: "1itod02g03ck",
    authorId: "3KVPE24I25EL",
    title: "Anything You Can Fit In The Circle I'll Pay For",
    description: "Test test test test...",
    durationInSeconds: 1199,
    thumbnailImage: "images/videos/thumbnail-6.webp",
    datePosted: "10-01-2023",
    viewCount: 141000000,
  },
];

export let videoData = [];

export function loadVideoData() {
  videoData = videos.map((video) => {
    return new Video(video);
  });

  return videoData;
}

export function getVideo(videoId) {
  const video =
    videoData[videoData.findIndex((v) => v.id === videoId)] || videoData[0];

  return video;
}
