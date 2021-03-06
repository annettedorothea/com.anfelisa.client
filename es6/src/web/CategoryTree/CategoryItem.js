import React from 'react';
import ExpandedCategoryItem from "./ExpandedCategoryItem";
import CollapsedCategoryItem from "./CollapsedCategoryItem";

export default class CategoryItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const expanded = this.props.expanded === true;
        const selected = this.props.selectedCategory && this.props.selectedCategory.categoryId === this.props.categoryId;
        return (
            <div className={`categoryItem depth_${this.props.depth}`}>
                {expanded &&
                <ExpandedCategoryItem
                    {...this.props}
                    selected={selected}
                    selectedCategory={this.props.selectedCategory}
                    depth={this.props.depth + 1}
                    dropAllowed={this.props.dropAllowed && this.props.selectedCategory.editable}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {!expanded &&
                <CollapsedCategoryItem
                    {...this.props}
                    selected={selected}
                    dropAllowed={this.props.dropAllowed && this.props.selectedCategory.editable}
                    dropTargetCategoryId={this.props.dropTargetCategoryId}
                    depth={this.props.depth + 1}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
            </div>
        );
    }
}


