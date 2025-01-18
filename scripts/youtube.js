import { videoData, loadVideoData } from "./data/videos.js";
import { getChannel, getSubscriberCount } from "./data/channels.js";
import { getTimeSince } from "./utils/date.js";

$(document).ready(function () {
  loadPage();
});

function loadPage() {
  loadVideoData();
  renderVideoGridHTML();
}

function renderVideoGridHTML() {
  let videoGridHTML = ``;

  videoData.forEach((video) => {
    const channelId = video.authorId;
    const channel = getChannel(channelId);

    const thumbnail = video.thumbnailImage;
    const duration = video.getDuration();
    const channelIcon = channel.profileImage;
    const channelName = channel.name;
    const subscriberCount = getSubscriberCount(channel);

    const videoTitle = video.title;
    const videoViewCount = video.getViewCount();
    const videoDatePosted = getTimeSince(new Date(video.datePosted));

    videoGridHTML += `
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail" src="${thumbnail}" />
        <div class="video-time">${duration}</div>
      </div>

      <div class="video-info-grid">
        <div class="channel-picture-container">
          <img class="profile-picture" src="${channelIcon}" />
          <div class="channel-tooltip">              
            <img src="${channelIcon}" />
            <div>
              <p class="channel-tooltip-name">${channelName}</p>
              <p class="channel-tooltip-subs">${subscriberCount} subscribers</p>
            </div>              
          </div>
        </div>

        <div class="video-info">
          <p class="video-title">
            ${videoTitle}
          </p>            
          <p class="video-author">${channelName}</p>
          <p class="video-stats">${videoViewCount} views &#183; ${videoDatePosted}</p>
        </div>
      </div>
    </div>
  `;
  });

  $(".js-video-grid").html(videoGridHTML);
}
