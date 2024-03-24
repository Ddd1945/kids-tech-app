export const defaultENV = 'pages'; //  localhost | pages

const localhost = '/';
const pages = '/kids-tech-app';

const ENV = {
  localhost: {
    homeRoute: localhost,
  },
  pages: {
    homeRoute: pages,
  },
};

const getEnvVars = () => {
  return ENV[defaultENV];
};

export default getEnvVars;
