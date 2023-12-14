# Dockerfile for React client

# Use node's alpine variant to save on space and version number is 17 (latest)
FROM node:20-alpine

# Create the folder "app" under the /usr/src path and set it to be the working directory
# for the further COPY, RUN and CMD instructions
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the "app" folder
COPY . .

# Install the dependencies mentioned in package.json
RUN npm install

RUN npm run build

RUN npm install -g serve

# Expose port 5173 on the host machine to the container for listening to external connections

# Start the React applications
CMD ["serve", "dist"]