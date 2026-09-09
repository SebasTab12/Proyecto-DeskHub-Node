   ```bash
   cp .env.example .env
   ```
   *Ejemplo de `.env`:*
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_password
   DB_NAME=campus_db
   ```

4. **Ejecutar el entorno de desarrollo:**
   ```bash
   npm run dev
   ```

## 🛤️ Endpoints Principales y Modelos

### 📚 Modelos de Base de Datos

#### Curso
- **id_curso** (Integer, Primary Key)
- **nombre** (String)
- **descripcion** (String)
- **duracion** (String)

#### Usuario
- **id_usuario** (Integer, Primary Key)
- **correo** (String)
- **nombre** (String)
- **apellido** (String)
- **contrasena** (String)

#### Matricula (Tabla Intermedia)
- **id_matricula** (Integer, Primary Key)
- **id_usuario** (Integer, Foreign Key)
- **id_curso** (Integer, Foreign Key)
- **fecha_inicio** (Date-Time)
- **fecha_fin** (Date-Time)

### 👥 Usuarios (`/api/usuarios`)
- `GET /api/usuarios` - Obtener lista de todos los usuarios.
- `POST /api/usuarios` - Crear un nuevo usuario.
- `PUT /api/usuarios/:id` (o `PATCH`) - Actualizar un usuario existente.
- `DELETE /api/usuarios/:id` - Eliminar un usuario.

### 🎓 Cursos (`/api/cursos`)
- `GET /api/cursos` - Obtener lista de todos los cursos.
- `POST /api/cursos` - Crear un nuevo curso.
- `PUT /api/cursos/:id` (o `PATCH`) - Actualizar un curso existente.
- `DELETE /api/cursos/:id` - Eliminar un curso.

*(La documentación detallada en formato OpenAPI/Swagger se puede consultar de forma interactiva ejecutando el proyecto y accediendo a la ruta `/docs` del servidor).*

## 📝 Flujo de Trabajo (Ejemplo de Petición)

Cuando un cliente hace un `POST /api/users`:
1. **Route** atrapa el método POST y la URL, dirigiéndolo a `UserController.createUser`.
2. **Controller** lee `req.body`, valida que venga el nombre y el correo, y llama a `UserService.registerUser(datos)`.
3. **Service** verifica si el correo ya existe llamando a `UserRepository.findByEmail(email)`. Si no existe, hashea la contraseña y llama a `UserRepository.save(datos)`.
4. **Repository** ejecuta el query `INSERT INTO users...` en la base de datos y retorna el registro creado.
5. **Controller** toma la respuesta del servicio y envía un `res.status(201).json({ data: newUser })`.

---
*Documentación inicial generada para el despliegue y configuración del entorno de desarrollo.*