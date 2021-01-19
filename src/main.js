const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
}

const createHeaderTemplate = () => {
    return (`
        <header class="page-header">
        <div class="page-body__container  page-header__container">
            <img class="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo">

        </div>
        </header>
    `)
}




const createRouteTemplate = () => {
    return (`
        <section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>
          </section>
    `)
}

const createCostTemplate = () => {
    return (`
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>
    `)
}

const createFilterTemplate = () => {
    return (`
        <h2 class="visually-hidden">Filter events</h2>
            <form class="trip-filters" action="#" method="get">
              <div class="trip-filters__filter">
                <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
              </div>

              <div class="trip-filters__filter">
                <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                <label class="trip-filters__filter-label" for="filter-future">Future</label>
              </div>

              <div class="trip-filters__filter">
                <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                <label class="trip-filters__filter-label" for="filter-past">Past</label>
              </div>

              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>
    `)
}

const createMenuTemplate = () => {
    return (`
        <div class="trip-main">
          

          <div class="trip-main__trip-controls  trip-controls">
            <h2 class="visually-hidden">Switch trip view</h2>
            <nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>

            
          </div>

          <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
        </div>
    `)
}

const createTripEditTemplate = () => {
    return (`

    `)
}

const createMainTemplate = () => {
    return (`
        
    `)
}

const createSortTemplate = () => {
    return (`

    `)
}

const createFlightTemplate = () => {
    return (`
        
    `)
}

const createFlightInfoTemplate = () => {
    return (`
        
    `)
}


const siteHeaderElement = document.querySelector('.page-header'); 
const siteHeadElement = siteHeaderElement.querySelector('.trip-main__trip-controls h2:first-child');
render(siteHeadElement, createMenuTemplate(), 'beforeend');