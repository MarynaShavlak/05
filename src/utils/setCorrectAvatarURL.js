export function setCorrectAvatarURL(avatarURL) {
  if (avatarURL === null) {
    return 'https://www.seekpng.com/png/full/523-5230720_this-icon-for-gender-neutral-user-is-an.png';
  }

  if (avatarURL?.match(/^(\/)?http(s)?:\/\//)) {
    return avatarURL.replace(/^\//, '');
  } else {
    return `https://image.tmdb.org/t/p/original${avatarURL}`;
  }
}
