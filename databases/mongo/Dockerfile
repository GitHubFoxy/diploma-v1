# Use the official MongoDB image
FROM mongo:jammy

# Set the root password
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root

# Expose the default MongoDB port
EXPOSE 27017

# Run the default command
CMD ["mongod"]