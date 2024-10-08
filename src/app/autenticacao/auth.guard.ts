import { inject } from "@angular/core"
import { UserService } from "./services/user.service"
import { Router } from "@angular/router"

export const authGuard = () => {
    const userService = inject(UserService)
    const router = inject(Router)

    if(!userService.estaLogado()){
        router.navigate(['auth/login']);
        return false;
    }

    return true;
}