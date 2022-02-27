$().ready(function() {
  axios.defaults.baseURL = 'http://api.tvmaze.com/';
})

/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  //http://api.tvmaze.com/search/shows?q=<search query>
  const res = await axios.get(`/search/shows?q=${query}`)
  let arr = res.data.map(show => {
    let theShow = show.show
    return {
      id: theShow.id,
      name: theShow.name,
      summary: theShow.summary,
      image: theShow.image['medium']
    }
  })
  return arr
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    if(!show.image) show.image = 'http://tinyurl.com/missing-tv'
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="episodesBtn" id="${show.id}">EPISODES</button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
   
  }
}

// #\31 767
/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);
  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  console.log('getting', id)

  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
  const res = await axios.get(`/shows/${id}/episodes`)
  $('#episodes-area').css('display', 'block')
  populateEpisodes(res.data)
 
  // TODO: return array-of-episode-info, as described in docstring above
}

function populateEpisodes(eps) {
  $('#episodes-area').css('display', 'block')
  eps.forEach(ep => {
    $('#episodes-list').append(`<li>${ep.name} (Season : ${ep.season} Number : ${ep.number})</li>`)
  })
}

$("#shows-list").on("click", async function handleEpisodeClick (evt) {
  evt.preventDefault();
  $('#search-query').val('')
  $('#episodes-list').empty()
  getEpisodes(evt.target.id)
});
