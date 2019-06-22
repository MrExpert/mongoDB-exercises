db.movies.insert({
"title": "Star Wars",
"writer": "George Lucas",
"year": 1977,
"actors": [
  "Mark Hamill",
  "Harison Ford",
  "Carrie Fisher",
  "Peter Chushing",
  "James Earl Jones"
] });

db.movies.insert({
    "title" : "Raiders of the Lost Ark",
    "writer" : "George Lucas",
    "year" : 1981,
    "actors" : [
    "Harrison Ford"
    ]
});

db.movies.insert({
    "title" : "Fight Club",
    "writer" : "Chuck Palahniuk",
    "year" : 1999,
    "actors" : [
    "Brad Pitt",
    "Edward Norton"
    ]
});

db.movies.insert({
    "title" : "Pulp Fiction",
    "writer" : "Quentin Tarantino",
    "year" : 1994,
    "actors" : [
    "John Travolta",
    "Uma Thurman"
    ]
});

db.movies.insert({
    "title" : "Inglorious Basterds",
    "writer" : "Quentin Tarantino",
    "year" : 2009,
    "actors" : [
    "Brad Pitt",
    "Diane Kruger",
    "Eli Roth"
    ]
});

db.movies.insert({
    "title" : "The Hobbit: An Unexpected Journey",
    "writer" : "J.R.R. Tolkein",
    "year" : 2012,
    "franchise" : "The Hobbit"
});

db.movies.insert({
"title" : "The Hobbit: The Desolation of Smaug",
"writer" : "J.R.R. Tolkein",
"year" : 2013,
"franchise" : "The Hobbit"
});

db.movies.insert({
    "title" : "The Hobbit: The Battle of the Five Armies",
    "writer" : "J.R.R. Tolkein",
    "year" : 2012,
    "franchise" : "The Hobbit",
    "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
});

db.movies.insert({
    "title" : "Pee Wee Herman's Big Adventure",
    "writer": "Phil Hartman",
    "year": 1985,
    "title" : "Avatar"
})

// Get all documents:
db.movies.find();
// Get movies written by Quentin Tarantino
db.movies.find({"writer": "Quentin Tarantino"});
// Get all documents where actors include "Brad Pitt"
db.movies.find({"actors": "Brad Pitt"});
// Get all documents with franchise set to "The Hobbit"
db.movies.find({"franchise":"The Hobbit"});
// Get all movies released in the 90s
db.movies.find({"year":{$gte:1990, $lte:1999} });
// get all movies released before the year 2000 or after 2010
db.movies.find({"year": {$lte: 2000, $gt:2010 }});

// Update Documents
// 1. add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, 
// sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - 
// and the gold within it - from the dragon Smaug."
db.movies.update(
    {"title": "The Hobbit: An Unexpected Journey"},
    { $set: {"synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } }
);
// 2. add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with 
// Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, 
// from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
db.movies.update(
    {"title":  "The Hobbit: The Desolation of Smaug"},
    { $set: {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }}
    );
    // 3. add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.update(
    {"title": "Pulp Fiction"},
    { $set: {"actors": "Samuel L. Jackson"}}
);
// Text Search
// 1.find all movies that have a synopsis that contains the word "Bilbo"
db.movies.find({"synopsis": /Bilbo/ });
// 2.find all movies that have a synopsis that contains the word "Gandalf"
db.movies.find( { "synopsis": /Gandalf/ } );


db.movies.update(
    {"title":  "The Hobbit: The Desolation of Smaug"},
    { $set: {"synopsis": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }}
    );