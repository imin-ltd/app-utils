import { logger } from "./logger";
import { kongSecretMiddleware } from "./kongSecretMiddleware";
import postgres = require("./postgres");
import { syncDbMigrations } from "./syncDbMigrations";
import { validateReq } from "./expressUtils";
import { validateReqQuery } from "./expressUtils";
export declare namespace expressUtils {
    export { validateReq };
    export { validateReqQuery };
}
export { logger, kongSecretMiddleware, postgres, syncDbMigrations };
