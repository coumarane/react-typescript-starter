# Use the official image as a parent image
# base image node 11.10.0 on linux alpine
FROM node:11.10.0-alpine

RUN mkdir /app

# Set the working directory within the virtualized Docker environment
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package.json package-lock.json ./

# Copy the rest of your app's source code from your host to Docker environment.
COPY . .

# Install node packages
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "npm", "start" ]
