# Proyecto Final Integrador - PIL
## Aplicación de Notas
### Pasos a seguir para descargar el proyecto y ponerlo en funcionamiento
1. Clonar el repositorio
2. Abrir el proyecto en Visual Studio Code
3. Verificar que tenga instalado Python
4. Crear un entorno virtual en la consola con el siguiente comando: `python - venv nombre_proyecto` 
5. Para levantar el entorno virtual utilice el siguiente comando: `.\nombre_proyecto\Scripts\activate`
6. A continuación descargar todos los paquetes del archivo requirements.txt con el siguiente comando: `pip install -r requirements.txt`
7. Entrar a la carpeta ***“FRONT/react-v2”*** y ejecute en la terminal el siguiente comando: `npm install`
8. Levante Apache y MySQL desde Xampp
9. Una vez levantado el Xampp, ingrese a phpMyAdmin e importe la Base de datos **notas_app.sql**
10. Corra las migraciones desde la consola ubicado en la carpeta ***“BACK”*** con los siguientes comandos:
    - `python manage.py makemigrations`
    - `python manage.py migrate`
11. Levante en servidor desde la consola con el siguiente comando: `python manage.py runserver`
12. En otra terminal paralela ubicado en la carpeta ***react-v2*** ingrese el siguiente comando: `npm start`
13. A continuación, se abrirá su navegador con el proyecto listo para usar.
 
### Sobre el proyecto
Consta de una App Full Stack con Backend y Frontend.
+ **Back** --> Django para manejo de Usuarios, Datos y mySQL
+ **Front** --> React para modularizacion de componentes
+ Se podrán registrar usuarios a través de la vista de registros.
+ El usuario se podrá loguear a través del login siempre y cuando se haya registrado previamente. 
+ Cada usuario podrá interactuar solo con sus notas, las cuales podrán ser: creadas, vistas, editadas y eliminadas.
+ Cuando el usuario crea la nota le debe agregar una fecha de finalización y un estado *(por hacer, en proceso o finalizada)*.
### Documentación del Backend
#### DER
![Diagrama de Entidad-Relación del proyecto]
(https://github.com/Uziano/ISPC_RD/tree/main/FRONT/react-v2/src/assets/DER.png)
#### Diagrama de Clase 
![Diagrama de Clase del proyecto]
(https://github.com/Uziano/ISPC_RD/tree/main/FRONT/react-v2/src/assets/diagramaDeClase.png)
#### Modelo Relacional
![Modelo Relacional]
(https://github.com/Uziano/ISPC_RD/tree/main/FRONT/react-v2/src/assets/modeloRelacional.png)
#### Tablas vistas desde la Base de Datos
![Tablas de la Base de Datos del proyecto]
(https://github.com/Uziano/ISPC_RD/tree/main/FRONT/react-v2/src/assets/BD.jpg)







