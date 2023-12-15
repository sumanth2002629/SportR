# Dockerfile for React client

FROM node:20-alpine

WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the "app" folder
COPY . .

# Install the dependencies mentioned in package.json
RUN npm install

RUN npm run build

RUN npm install -g serve

# Start the React applications
CMD ["serve", "dist"]