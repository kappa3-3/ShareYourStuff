const { MongoClient } = require('mongodb');

const dbuser = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const db = process.env.MONGO_DB;

async function postData(data) {
  const uri = `mongodb+srv://${dbuser}:${password}@sharestuffcluster.cfyyg.mongodb.net/donationsDB?retryWrites=true&w=majority`
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const result = await client
      .db('donationsDB')
      .collection('donations')
      .insertOne({donation: data })
    return result;
  } catch (err) {
    await client.close();
    throw (err);
  }
}

exports.handler = async function (event, context) {
console.log(event.body);
  try {
    const response = await postData(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};
