# Use the official Node.js image as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . ./

# Expose the port the app runs on
EXPOSE 4000

# Start the Node.js application
CMD ["npm", "run", "start"]