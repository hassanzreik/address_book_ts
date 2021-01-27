import {User} from "./entities/User";
import {__prode__} from "./constants";
import {MikroORM} from "@mikro-orm/core";
import path from "path";
import {Contact} from "./entities/Contact";
import {Label} from "./entities/Label";
import {JobTitle} from "./entities/JobTitle";
import {ContactAddress} from "./entities/ContactAddress";
import {ContactEmail} from "./entities/ContactEmail";
import {ContactPhone} from "./entities/ContactPhone";
import {ContactRelationship} from "./entities/ContactRelationship";
import {ContactSocialProfile} from "./entities/ContactSocialProfile";
import {Country} from "./entities/Country";

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities:[
        User,
        Contact,
        Label,
        JobTitle,
        ContactAddress,
        ContactEmail,
        ContactPhone,
        ContactRelationship,
        ContactSocialProfile,
        Country
    ],
    dbName: 'address_book_db',
    user: 'root',
    password: '1',
    type: 'mysql',
    debug: !__prode__
} as Parameters<typeof MikroORM.init>[0];