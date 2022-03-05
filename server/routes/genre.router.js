const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
//GET to pull the genre info for clicked movie
router.get('/:id', (req, res) => {
const query =  
`SELECT "genres"."name" FROM "movies" 
JOIN "movies_genres" 
ON "movies"."id"="movies_genres"."movie_id"
JOIN "genres"
ON "movies_genres"."genre_id"="genres"."id"
where "movies"."id"=${id};
`
pool.query(query)
.then( result => {
  res.send(result.rows);
})
.catch(err => {
  console.log('ERROR: Get all movies', err);
  res.sendStatus(500)
});
});
module.exports = router;