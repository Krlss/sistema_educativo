# Specify a base image
FROM node:16.15.1-stretch-slim AS debian

# Install our basic requirements
RUN apt-get update && \
      apt-get install --no-install-recommends --no-install-suggests -q -y \
      apt-transport-https \
      apt-utils \
      build-essential \
      dirmngr \
      gnupg \
      htop \
      lsb-release \
      openssl \
      python-pip \
      python-setuptools \
      software-properties-common \
      vim-nox \
      procps \
      lsof \
      wget \
      git \
      && \
      DEBIAN_FRONTEND=noninteractive apt-get autoremove -y && \
      DEBIAN_FRONTEND=noninteractive apt-get autoclean && \
      DEBIAN_FRONTEND=noninteractive apt-get clean && \
      rm -Rf /var/lib/apt/lists/* /usr/share/man/* /usr/share/doc

WORKDIR /app

RUN echo "Creating fullstack-apollo-react-boilerplate"
WORKDIR /app/fullstack-apollo-react-boilerplate

RUN npm ci --only=production

# Default command
EXPOSE 3000
CMD ["npm", "start"]