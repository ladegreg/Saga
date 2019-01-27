const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { dateToString } = require('../../helpers/date');

const User = require('../../models/user');

module.exports = {
  createUser: async args => {
    try {
      const existingUserEmail = await User.findOne({email: args.userInput.email})
        if (existingUserEmail) {
          throw new Error('email już jest zajęty!');
        }
      const existingUserNick = await User.findOne({nick: args.userInput.nick})
        if (existingUserNick) {
          throw new Error('nick już jest zajęty!');
        }
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

        const user = new User({
          nick: args.userInput.nick,
          email: args.userInput.email,
          password: hashedPassword
        })

        const result = await user.save();

        return {
          ...result._doc,
          password: null,
          _id: result.id,
          createdAt: dateToString(result._doc.createdAt),
          updateAt: dateToString(result._doc.updateAt)
        };
    } catch (err) {
      throw err;
    }
  },
  login: async ({nick, email, password}) => {
    const user = await User.findOne({email: email}) || await User.findOne({nick: nick});
    if (!user) {
      throw new Error('1Niema takiego urzytkownika lub nieprawidłowe hasło');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('2Niema takiego urzytkownika lub nieprawidłowe hasło');
    }
    const token = jwt.sign({userId: user.id, email: user.email}, 'somesupersecretkey', {
      expiresIn: '1h'
    });
    return {
      userId: user.id,
      token: token,
      tokenExpiration: 1
    };
  }
};
