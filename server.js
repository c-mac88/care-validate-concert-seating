import express from 'express';
import redis from 'redis';

const app = express();
const port = 3000;

let redisClient;

const packages = {
  1: 'package_1',
  2: 'package_2',
  3: 'package_3',
  4: 'package_4',
  5: 'package_5',
};

(async () => {
  redisClient = redis.createClient();

  redisClient.on("connect", () => redisClient.set('packages', JSON.stringify(packages)));

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function getPackageName(req, res) {
  const { packageID } = req.params;
  let packageName;

  try {
    const cacheResults = await redisClient.get('packages');
    if (cacheResults) {
      const packages = JSON.parse(cacheResults);
      packageName = packages[packageID];
    } else {
      packageName = packages[packageID];  // In the real world this would be a call to DB 
    }                                     // to retrieve the data and set cache

    res.send({
      data: packageName,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}

app.get("/package:packageID", getPackageName);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
