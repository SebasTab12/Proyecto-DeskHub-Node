import { Router } from "express";
import { listar, crear, editar, eliminar } from '../controllers/ControllerCurso.js'

const router_curso = Router()

router_curso.get("/api/cursos/", listar)
router_curso.post("/api/cursos/", crear)
router_curso.delete("/api/cursos/:id", eliminar)
router_curso.patch("/api/cursos/:id", editar)

export{
    router_curso
}