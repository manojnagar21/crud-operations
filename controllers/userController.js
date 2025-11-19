import User from '../models/User.js';
import { sequelize } from '../db.js';
import RefreshToken from '../models/RefreshToken.js';
import getJwtToken from '../helpers/generateJwtToken.js';
import getRefreshToken from '../helpers/generateRefreshToken.js';
const userLogin = (req, res) => {
    console.log(req.body);
    const user = User.findOne({
        where: {
            EmailId: req.body.emailId,
            password: req.body.password,
        }
    })
    .then(async (user) => {
        if(user.dataValues) {
            console.log("user: " + user);
            delete user.dataValues.Password;
            console.log(user.dataValues);
            user.dataValues.token = getJwtToken({ id: user.dataValues.Id });
            const refreshToken = getRefreshToken({ id: user.dataValues.Id });
            user.dataValues.refreshToken = refreshToken;

            await RefreshToken.create({
                token: refreshToken,
                expiresAt: new Date(Date.now() + 30 * 86400 * 1000),
                UserId: user.id,
                device: req.headers["user-agent"],
                ip: req.ip,
            });
            return res.send({ msg: "User logged in successfully", data: user.dataValues});
        }
    })
    .catch((error) => {
        console.log("error: " + error);
        return res.send({ msg: "User login unsuccessfull", data: error});
    });
}
export default userLogin;