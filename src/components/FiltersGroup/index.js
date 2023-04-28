import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList, updateRatingId, activeRatingId} = props

    return ratingsList.map(eachRating => {
      const activeRatingTextClassName =
        activeRatingId === eachRating.ratingId
          ? 'rating-button-text active-rating-text'
          : 'rating-button-text'

      const onClickRating = () => {
        updateRatingId(eachRating.ratingId)
      }

      return (
        <li key={eachRating.ratingId}>
          <button
            type="button"
            className="rating-button"
            onClick={onClickRating}
          >
            <img
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
              className="rating-image"
            />
            <p className={activeRatingTextClassName}>& up</p>
          </button>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {activeCategoryId, updateCategoryId, categoryOptions} = props

    return categoryOptions.map(eachOption => {
      const onClickCategory = () => updateCategoryId(eachOption.categoryId)

      const categoryItemClassName =
        activeCategoryId === eachOption.categoryId
          ? 'category-option-text active-category'
          : 'category-option-text'
      return (
        <li key={eachOption.categoryId} onClick={onClickCategory}>
          <p className={categoryItemClassName}>{eachOption.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoriesList()}</ul>
    </>
  )

  const onChangeSearchinput = event => {
    const {updateSearchInput} = props
    updateSearchInput(event.target.value)
  }

  const onClickEnterSearch = event => {
    const {getProducts} = props
    if (event.key === 'Enter') {
      getProducts()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
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
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
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
