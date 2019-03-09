export const PROFILE_LINKS = [
  {
    icon: 'gitlab',
    name: 'GitLab',
    url: 'https://gitlab.com/kirbo',
    color: '#E2432A',
  },
  {
    icon: 'github',
    name: 'GitHub',
    url: 'https://github.com/kirbo',
    color: '#333',
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kimmosaari',
    color: '#0077b5',
  },
  {
    icon: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/Kirbowned',
    color: '#3b5998',
  },
  {
    icon: 'keybase',
    name: 'Keybase',
    url: 'https://keybase.io/kirbo',
    color: '#3aaaff',
  },
];

const YEAR_STARTED = 2019;
const YEAR_NOW = new Date().getFullYear();
const YEAR_END = `${YEAR_NOW > YEAR_STARTED ? ` - ${YEAR_NOW}` : ''}`;
export const COPYRIGHT_YEAR = `${YEAR_STARTED}${YEAR_END}`;
