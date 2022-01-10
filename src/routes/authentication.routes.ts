import { Router } from "express";

import { AuthenticationUserController } from "../modules/accounts/useCases/authenticationUser/AuthenticationUserController";

const authenticationRoutes = Router();

const authenticationUserController = new AuthenticationUserController();

authenticationRoutes.post("/sessions", authenticationUserController.handle);

export { authenticationRoutes };
