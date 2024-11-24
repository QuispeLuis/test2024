# Imagen base
FROM node:18
# Configuración del directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiar los archivos de configuración de dependencias
COPY package*.json ./
# Instalar las dependencias
RUN npm install
# Copiar todo el código del proyecto
COPY . .
# Exponer el puerto del servidor (según tu código backend)
EXPOSE 4000
# Comando para iniciar el servidor
CMD ["npm", "run", "dev"]