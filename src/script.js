function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  function searchCity(city) {
    let apiKey = "6975040fc193feta4f47d8af4o55baa9";
    let apiUrl =
      "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
  }

  cityElement.innerHTML = searchInput.value;
  searchCity(searchinput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
