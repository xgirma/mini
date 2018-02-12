import PropTypes, { shape, number, string } from 'prop-types';

const podType = shape({
  url: string,
  description: string,
  duration: number,
  displayText: string,
  image: string,
  likes: number,
  link: string,
  owner_email: string,
  owner_name: string,
  published: string,
  title: string,
  _id: string,
}).isRequired;

const playlistType = PropTypes.arrayOf(podType);

export { playlistType, podType };
