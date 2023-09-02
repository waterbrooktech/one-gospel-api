const cors = require('cors');
const cron = require('node-cron');
const express = require('express');

const routes = require('./routes');
const bodyParser = require('body-parser');
const { resetCenterAttendees } = require('./controllers/centerControllers');

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', routes(router));

cron.schedule('* * * * 1 *', () => resetCenterAttendees());

app.listen(PORT, () => {
  console.log(`TWB Notification App Running on ${PORT}`);
});