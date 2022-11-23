import env from '../config/.env.json' assert {type: "json"}
import jwt from 'jsonwebtoken'

export default class TokenService {
  static createToken = (payload) =>{
    return jwt.sign({payload}, env.segredo)
  }
  static validateToken =(token)=>{
    return jwt.verify(token, env.segredo)
  }
}