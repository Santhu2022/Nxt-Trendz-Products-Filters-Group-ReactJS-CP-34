import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    updateSearchInput,
    searchInput,
    getProducts,
    categoryOptions,
    updateCategoryId,
    activeCategoryId,
    ratingsList,
    updateRatingId,
    activeRatingId,
    clearFilters,
  } = props

  const onChangeSearchinput = event => {
    updateSearchInput(event.target.value)
  }

  const onClickEnterSearch = event => {
    if (event.key === 'Enter') {
      getProducts()
    }
  }

  const onClickCategory = event => {
    updateCategoryId(event.target.id)
  }

  const onClickRating = event => {
    updateRatingId(event.target.id)
  }

  return (
    <div className="filters-group-container">
      <div className="search-bar">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchinput}
          onKeyDown={onClickEnterSearch}
          value={searchInput}
        />
        <BsSearch className="search-icon" />
      </div>

      <ul className="category-list" onClick={onClickCategory}>
        <li>
          <h1 className="category-heading">Category</h1>
        </li>
        {categoryOptions.map(eachOption => {
          const categoryItemClassName =
            activeCategoryId === eachOption.categoryId
              ? 'category-option-text active-category'
              : 'category-option-text'
          return (
            <li key={eachOption.categoryId}>
              <p className={categoryItemClassName} id={eachOption.categoryId}>
                {eachOption.name}
              </p>
            </li>
          )
        })}
      </ul>

      <ul className="ratings-list">
        <li className="rating-heading">Rating</li>
        {ratingsList.map(eachRating => {
          const activeRatingtextClassname =
            activeRatingId === eachRating.ratingId
              ? 'rating-button-text active-rating-text'
              : 'rating-button-text'
          return (
            <li key={eachRating.ratingId} id={eachRating.ratingId}>
              <button
                type="button"
                className="rating-button"
                onClick={onClickRating}
                id={eachRating.ratingId}
              >
                <img
                  src={eachRating.imageUrl}
                  alt={`rating ${eachRating.ratingId}`}
                  className="rating-image"
                  id={eachRating.ratingId}
                />
                <p
                  className={activeRatingtextClassname}
                  id={eachRating.ratingId}
                >
                  & up
                </p>
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
