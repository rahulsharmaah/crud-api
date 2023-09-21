const express = requirre('express')
const app = express();

//middleware
app.use(express.json());

app.listen(3001, () =>
{
  console.log("Server is running on port 30001");
});


module.export  = app;