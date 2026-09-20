import {cookies} from 'next/headers'; import {jwtVerify,SignJWT} from 'jose'; import {db} from './db';
const secret=new TextEncoder().encode(process.env.JWT_SECRET||'dev-secret-change-me');
export async function sign(id:string){return new SignJWT({id}).setProtectedHeader({alg:'HS256'}).setExpirationTime('7d').sign(secret)}
export async function user(){try{const c=await cookies();const t=c.get('tree_token')?.value;if(!t)return null;const {payload}=await jwtVerify(t,secret);return db.user.findUnique({where:{id:String(payload.id)}})}catch{return null}}
