import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.createList();
  }

  createList = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          { categories.map((category) => (
            <button
              type="button"
              data-testid="category"
              key={ category.id }
            >
              { category.name }
            </button>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
