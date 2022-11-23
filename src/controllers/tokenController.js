import TokenService from "../services/tokenService.js";

export default class TokenController {
    static createToken = async (req,res) =>{
      const {name} = req.params
        const token = TokenService.createToken(name);
        res.status(201).json({ token: token });
    }

    
}
