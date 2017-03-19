const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin123@52.91.103.201/vetguidetest',
  port: process.env.PORT || 8000,
};

export default config;
