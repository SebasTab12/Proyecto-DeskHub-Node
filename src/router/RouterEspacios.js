import { Router } from "express";
import { listar, crear, editar, eliminar } from '../controllers/ControllerEspacio.js'

const router_Espacio = Router()

router_Espacio.get("/api/Espacios/", listar)
router_Espacio.post("/api/Espacios/", crear)
router_Espacio.delete("/api/Espacios/:id", eliminar)
router_Espacio.patch("/api/Espacios/:id", editar)

export{
    router_Espacio
}