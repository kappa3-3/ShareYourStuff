const { MongoClient } = require('mongodb');

const dbuser = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const db = process.env.MONGO_DB;

async function postData(data) {
  const uri = `mongodb+srv://${dbuser}:${password}@sharestuffcluster.cfyyg.mongodb.net/${db}?retryWrites=true&w=majority`
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const result = await client
      .db('organizations')
      .collection('localfunds')
      // .findOne({ email_address: user.email, password: user.password });
      // .insertOne({data})
    // const p = await result
    return result.ops[0];
  } catch (err) {
    console.log(err);
    await client.close();
  }
}

async function getData(collection) {
  const uri = `mongodb+srv://${dbuser}:${password}@sharestuffcluster.cfyyg.mongodb.net/${db}?retryWrites=true&w=majority`
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const result = await client
      .db('organizations')
      .collection(collection)
      .findOne()
    return result.data;
  } catch (err) {
    console.log(err);
    await client.close();
  }
}



exports.handler = async function (event, context) {
  try {
  const data = await getData(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({data})
  };  
  } catch (err) {
      console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    };
  }
};