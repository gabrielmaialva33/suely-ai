FROM node:19

# Create app directory
WORKDIR /home/suely

# Copy all files
COPY . .

# Install app dependencies and build
RUN yarn && yarn build

# Copy the main.gpt.txt file
COPY ./tmp/main.gpt.txt ./tmp/main.gpt.txt

# Expose the port
EXPOSE 80

# Run the app
CMD [ "yarn", "start" ]



