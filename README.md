Formulario de Cotización
Este proyecto es una aplicación web desarrollada con Angular que permite generar cotizaciones de productos, enviarlas por correo electrónico en formato PDF y realizar otras acciones relacionadas con la gestión de clientes y productos.

Características Principales
Generación de Cotizaciones: Permite crear cotizaciones con productos, calcular subtotales, IVA y totales.
Generación de PDF: Usa jsPDF para generar un archivo PDF con los datos de la cotización.
Envío de Cotizaciones por Correo: Envía el PDF generado al servidor para ser enviado por correo electrónico.
Gestión de Clientes: Permite agregar clientes y almacenarlos en el navegador.
Interacción con un Servidor Backend: Incluye funcionalidades para iniciar un servidor y enviar datos al backend.
Requisitos Previos
Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

Node.js (versión 16 o superior)
Angular CLI (instalado globalmente con npm install -g @angular/cli)
Un servidor backend que escuche en http://localhost:3000 con los endpoints /start-server y /enviar-correo.
Instalación
Clona el Repositorio:

Instala las Dependencias:

Inicia el Servidor de Desarrollo:

Abre tu navegador y accede a http://localhost:4200.

Estructura del Proyecto
Uso de la Aplicación
1. Generar una Cotización
Completa los campos de productos en la tabla.
Ingresa el correo electrónico y el título de la cotización.
Haz clic en "Enviar Cotización" para generar y enviar el PDF.
2. Agregar un Cliente
Haz clic en "Agregar Cliente" en el menú.
Completa los campos de nombre y correo electrónico.
Haz clic en "Guardar Cliente".
3. Iniciar el Servidor
Haz clic en "Iniciar Servidor" para enviar una solicitud al backend y activar el servidor.
Interacción con las APIs
1. Iniciar el Servidor
Endpoint: POST http://localhost:3000/start-server
Descripción: Inicia el servidor backend.
Respuesta Esperada:
200 OK: Servidor iniciado correctamente.
500 Internal Server Error: Error al iniciar el servidor.
2. Enviar Cotización
Endpoint: POST http://localhost:3000/enviar-correo
Descripción: Envía un archivo PDF generado al servidor para ser enviado por correo.
Datos Enviados:
email: Correo del cliente.
title: Título de la cotización.
pdf: Archivo PDF generado.
Respuesta Esperada:
200 OK: Cotización enviada correctamente.
400 Bad Request: Error en los datos enviados.
500 Internal Server Error: Error en el servidor.
Tecnologías Utilizadas
Angular: Framework frontend para construir la interfaz de usuario.
jsPDF: Librería para generar archivos PDF en el navegador.
HTML/CSS: Para la estructura y estilos de la aplicación.
Fetch API: Para realizar solicitudes HTTP al servidor backend.
Personalización
Modificar Estilos
Los estilos globales están definidos en el archivo styles.css. Puedes personalizarlos según tus necesidades.

Agregar Funcionalidades
La lógica principal está en el archivo app.component.ts. Puedes agregar nuevas funciones o modificar las existentes.

Problemas Comunes
1. Error: Cannot find module '@angular/core'
Solución: Asegúrate de haber instalado las dependencias con npm install.
2. Error: Could not find the '@angular-devkit/build-angular' builder's node package
Solución: Instala el paquete faltante con:
3. El Servidor Backend No Responde
Solución: Verifica que el servidor backend esté ejecutándose en http://localhost:3000.
Contribuciones
Si deseas contribuir a este proyecto:

Haz un fork del repositorio.
Crea una rama para tus cambios:
Realiza tus cambios y haz un commit:
Envía un pull request.