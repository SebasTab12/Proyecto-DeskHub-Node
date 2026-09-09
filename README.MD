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

## 🛤️ Endpoints Principales (Fase Inicial)

### Usuarios (`/api/users`)
- `GET /api/users` - Obtiene la lista de todos los usuarios.
- `GET /api/users/:id` - Obtiene los detalles de un usuario específico.
- `POST /api/users` - Crea un nuevo usuario (estudiante o profesor).
- `PUT /api/users/:id` - Actualiza la información del usuario.
- `DELETE /api/users/:id` - Elimina o desactiva un usuario.

### Espacios (`/api/courses`)
- `GET /api/courses` - Lista todos los Espacios disponibles.
- `POST /api/courses` - Crea un nuevo Espacio.
- `POST /api/courses/:id/enroll` - Inscribe un estudiante en un Espacio (ejemplo de lógica cruzada).

## 📝 Flujo de Trabajo (Ejemplo de Petición)

Cuando un cliente hace un `POST /api/users`:
1. **Route** atrapa el método POST y la URL, dirigiéndolo a `UserController.createUser`.
2. **Controller** lee `req.body`, valida que venga el nombre y el correo, y llama a `UserService.registerUser(datos)`.
3. **Service** verifica si el correo ya existe llamando a `UserRepository.findByEmail(email)`. Si no existe, hashea la contraseña y llama a `UserRepository.save(datos)`.
4. **Repository** ejecuta el query `INSERT INTO users...` en la base de datos y retorna el registro creado.
5. **Controller** toma la respuesta del servicio y envía un `res.status(201).json({ data: newUser })`.

---
*Documentación inicial generada para el despliegue y configuración del entorno de desarrollo.*