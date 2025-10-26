FROM node:20

WORKDIR /app

# Install dependencies including nodemon
COPY package*.json ./
RUN npm install && npm install --save-dev nodemon

# Copy source code
COPY . .

EXPOSE 5000

# Run nodemon for live reload
CMD ["npx", "nodemon", "server.js"]
