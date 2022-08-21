
# ICT Skills 2 Assignment.

Name: Andrew Cameron

## Overview.

This Movies Assignment App is a continuation of the Movies App started in ICT Skills 2. Here we use TMDB APIs to create an overview of current and upcoming movies, popular actors, and current TV series. The app allows the user to not only search for different items, but also view in depth details on each movie/person/TV show. There are also additional personalised features, such as the ability to compile a list of favourite movies or even create a custom "fantasy" movie. A full list of new features (beyond those completed as part of the ICT Skills 2 labs) includes: 

e.g. 
+ A page listing popular movie actors, detailing the name, image, and popularity of each actor. 
+ Links for each actor to detail their biography.
+ Links for each actor to detail a list of movies they have acted in.
+ A link (movie icon) for each movie to display similar movies.
+ A page listing current TV Series.
+ Links for each TV series to detail their overview, genres, running time, etc.
+ Links for each movie to detail a list of cast members involved.
+ An abilty to sort movies/actors/TV series by titles/names/popularity.
+ An ability to create a "fantasy movie", including movie title, plot, a selection of genres, a release date, and a selection of roles using popular actors.
+ An ability to have protected views for both the favourites and fantasy pages, with other views (home, upcoming movies, popular actors, TV series) being public.
+ An ability to login and authenticate users for accessing favourites and fantasy pages. 
+ Caching for actors, similar movies, movie cast members, actor movie credits, TV series, and images (see below).
+ Additional Storybook support for actor details, actor header, actor list, TV series details, TV series list, and TV series header components (including relevant sample data for each).


## Setup requirements.

To set up the app, download the code and use your preferred IDE (e.g. Visual Studio Code) to open. Open a nerminal and perform "npm install". 

Head to the TMBD website and follow the steps to set up an account and receive a free API key (https://www.themoviedb.org/documentation/api).

Within the root folder, create a .env file with the following items:

REACT_APP_TMDB_KEY=[insert_your_API_key]
FAST_REFRESH=false

Start the app using "npm start"

## App Design.

### Routing/Navigation.

Newly added routes supported by the Movies Assignment App include: 

+ /actors/popular - a list of popular actors.
+ /person/:id - details of a particular actor.
+ /movies/:id/cast - a list of all the cast members within a particualr movie.
+ /person/:id/movie_credits - a list of movie credits for a particular actor.
+ /tvseries - a list of current TV series. 
+ /tvseries/:id - details of a particular TV series. 
+ /movies/:id/similarmovies - a list of similar movies to a particular movie. 
+ /fantasymovie - a page for creating a fantasy movie.
+ /fantasymovie/addrole - a page for adding one or more roles to a fantasy movie. 
+ /login - a page for login in an authenticated user to access private view pages (i.e. Favourites and Fantasy Movie).


### Views/Pages.

Below is a list of added views within the Movies Assignment App, including: 

>Lists movies from the Discover endpoint with additional menu items and movie info options. Filtering on title and genre attributes is supported, as well as sorting by title and popularity.

![][updatedhomepage]

![][updatedhomepagewithfilter]

>Lists popular actors including info links for bios and movie credits. Filtering on name attributes is supported, as well as sorting by name and popularity.

![][popularactors]

>Provides description of actor's bio.

![][actorbio]

>Lists all the movies credited to a particular actor.

![][moviecredits]

>Lists all the cast members within a particular movie.

![][moviecast]

>Lists current TV series including info link for specific series. Filtering on name and genre attributes is supported, as well as sorting by name and popularity.

![][tvseries]

>Provides details for specific TV series.

![][tvseriesdetails]

>Lists movies that are similar to a particualr movie. Filtering on title and genre attributes is supported, as well as sorting by title and popularity.

![][similarmovies]

>Allows user to create a fantasy movie with multiple inputs for title, plot, multiple genre selection, and release date, whilst also allowing addition of multiple roles. Once submitted and roles selected, the details of the fantasy movie are displayed until they are potentially overwritten or roles are deleted. 

![][fantasymovieinput]

![][fantasymoviedetails]

>Allows user to create a fantasy movie role, selecting from multiple actors and including the fantasy character name and description. A confirmation message is provided when the role is created.  

![][fantasymovierole]

>Allows user to login with authentication credentials including username (e.g. "user1") and password (e.g. "password").  

![][login]


### Component catalogue.

Below is a list of added Storybook "stories" within the Movies Assignment App, including: 

>Actors list.

![][storiesactorslist]

>Actor details.

![][storiesactordetails]

>Actor header.

![][storiesactorheader]

>TV series list.

![][storiestvserieslist]

>TV series details.

![][storiestvseriesdetails]

>TV series header.

![][storiestvseriesheader]

## Caching.

The following list highlights the TMDB server state cached by the Movies Assignment App. Specific cached items in the list can be seen validated in the screenshot of the react-query dev tool below (e.g. "discover" is shown by the ["discover"] item in the dev tool).

+ Discover movies (pagination support) - "discover"
+ Movie details
 + Movie info - "movie"
 + Movie images - "images"
+ Movie cast
 + Movie info - "movietitle"
 + Movie cast - "moviecast"
+ Similar movies
 + Movie info - "movietitle"
 + Similar movies - "similarmovies"
+ Upcoming movies (pagination support) - "upcoming"
+ Popular actors (pagination support) - "popularPersons"
+ Actor details
 + Actor info - "person"
 + Actor images - "images"
+ Actor credits
 + Actor info - "personname"
 + Actor movies - "personmovies"
+ TV series (pagination support) - "tvseries"
+ TV series details
 + TV series info - "series"
 + TV series images - "images"

![][caching]

## Authentication 

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]
The Movies Assignment App uses basic authentication with a single user name (user1) and password (password) enabling login access. The two private/protected routes include: 

+ /fantasymovie
+ /movies/favourites

## Server-side persistence (if relevant)

No server-side persistence has been implemented.

## Additional features (if relevant),

All features, including sorting/filtering, have been mentioned above. 

## Independent learning (if relevant),

Independent learning related to: 

Sorting - as learned here: https://codedec.com/tutorials/how-to-do-sorting-in-react/
Date selection - as learned here: https://material-ui-pickers.dev/getting-started/usage





[updatedhomepage]: ./public/updatedhomepage.png
[updatedhomepagewithfilter]: ./public/updatedhomepagewithfilter.png
[popularactors]: ./public/popularactors.png
[actorbio]: ./public/actorbio.png
[moviecredits]: ./public/moviecredits.png
[moviecast]: ./public/moviecast.png
[tvseries]: ./public/tvseries.png
[tvseriesdetails]: ./public/tvseriesdetails.png
[similarmovies]: ./public/similarmovies.png
[fantasymovieinput]: ./public/fantasymovieinput.png
[fantasymoviedetails]: ./public/fantasymoviedetails.png
[fantasymovierole]: ./public/fantasymovierole.png
[login]: ./public/login.png
[storiesactorslist]: ./public/storiesactorslist.png
[storiesactordetails]: ./public/storiesactordetails.png
[storiesactorheader]: ./public/storiesactorheader.png
[storiestvserieslist]: ./public/storiestvserieslist.png
[storiestvseriesdetails]: ./public/storiestvseriesdetails.png
[storiestvseriesheader]: ./public/storiestvseriesheader.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png