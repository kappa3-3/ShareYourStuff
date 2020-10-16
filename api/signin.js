
const { MongoClient } = require('mongodb');
const dbuser = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;

async function getData(user) {
  const uri = `mongodb+srv://${dbuser}:${password}@sharestuffcluster.cfyyg.mongodb.net/users?retryWrites=true&w=majority`
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const existingEmail = await client
      .db('users')
      .collection('accounts')
      .findOne({ email: user.email })
    await client.close();
    if (existingEmail === null) {
      return ({
        isExisting: false,
      })
    } else {
      if (existingEmail.password === user.password) {
        return ({
          isExisting: true,
          password: true,
          email: existingEmail.email,
        });
      } else {
        return ({
          isExisting: true,
          password: false,
          email: existingEmail.email,
        });
      }

    }
  } catch (err) {
    await client.close();
    throw (err);
  }
}

exports.handler = async function (event, context) {
  try {
    const data = await getData(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};
