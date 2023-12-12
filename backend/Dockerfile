# Dockerfile for Express Backend

# Use node's alpine variant to save on space and version number is 17 (latest)
FROM node:20-alpine

# Create the folder "app" under the /usr/src path and set it to be the working directory
# for the further COPY, RUN and CMD instructions
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the "app" folder
COPY ./package*.json ./

# Install the dependencies mentioned in package.json
RUN npm install

# Copy the local files to the "app" folder
COPY . .

# Expose port 3001 on the host machine to the container for listening to external connections
EXPOSE 3001

CMD ["npm", "start"]