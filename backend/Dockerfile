# Dockerfile for Express Backend

FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json .
# Install the dependencies mentioned in package.json
RUN npm ci
# Copy the local files to the "app" folder
COPY . .

# Expose port 3001 on the host machine to the container for listening to external connections
EXPOSE 3001

CMD ["npm", "start"]
