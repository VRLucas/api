import app from './app';

const port = 3001;
app.listen(port, () =>{
  console.log(`Server is running on ${port}`);
  console.log(`Server running on http://localhost:${port}`);

});
