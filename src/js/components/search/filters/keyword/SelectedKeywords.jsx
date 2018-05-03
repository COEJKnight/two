/**
 * SelectedKeywords.jsx
 * Created by David Trinh on 5/2/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ShownKeyword from './ShownKeyword';

const propTypes = {
    removeKeyword: PropTypes.func,
    selectedKeyword: PropTypes.object
};

export default class SelectedKeywords extends React.Component {
    render() {
        let hideTags = 'hide';
        if (this.props.selectedKeyword.size !== 0) {
            hideTags = '';
        }
        const shownKeywords = [];
        this.props.selectedKeyword.forEach((keyword) => {
            const value = (
                <ShownKeyword
                    keyword={keyword}
                    key={keyword}
                    removeKeyword={this.props.removeKeyword.bind(null, keyword)} />
            );
            shownKeywords.push(value);
        });

        return (
            <div
                className={`selected-filters ${hideTags}`}
                id="selected-keyword-tags"
                role="status">
                {shownKeywords}
            </div>
        );
    }
}

SelectedKeywords.propTypes = propTypes;