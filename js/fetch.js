const apiRequest = (function() {

  async function getData(id) {
    console.log(id);
    let url = "database/db.json";
    id = id-1; // database starts at 1
    let fetcher = await fetch(url)
                  .then(response => response.json())
                  .then(data => data.monster[id])
                  .catch(error => console.error(error));
    return fetcher;
  }

  async function searchData(searchInput) {
    let url = "database/db.json";

    let fetcher = await fetch(url)
                  .then(response => response.json())
                  .then(data => data.monster)
                  .catch(error => console.error(error));

    searchInput = searchInput.toUpperCase();
    fetcher = fetcher.filter(mob => mob.art.toUpperCase().includes(searchInput));

    pageBuilder.buildSearchResult(fetcher);
  }

  return {
    getData: getData,
    search: searchData
  }

})();
