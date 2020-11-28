import watchMedia from 'svelte-media';

const mediaqueries = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)'
};

export const media = watchMedia(mediaqueries);
