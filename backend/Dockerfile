# Dockerfile for Node.js Server

FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run the server
CMD ["node", "index.js"]