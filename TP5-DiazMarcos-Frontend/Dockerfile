# Etapa de compilación
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de despliegue con Apache2
FROM httpd:2.4
WORKDIR /usr/local/apache2/htdocs/
COPY --from=build /app/dist/tp5-diaz-marcos-frontend/ . 
EXPOSE 80
CMD ["httpd-foreground"]