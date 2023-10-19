import { registerAs } from "@nestjs/config";

export const JWTConfig = registerAs("JWT", () => ({
    secret: "https://docs.nestjs.com/techniques/configuration"
}))