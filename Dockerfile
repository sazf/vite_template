FROM node:18.16-slim AS web-ui-build-stage
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

ENTRYPOINT ["/bin/bash"]

FROM nginx:1.23.4-alpine
COPY --from=web-ui-build-stage /build /usr/share/nginx/html
ENV PORT 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
