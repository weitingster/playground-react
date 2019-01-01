import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);

    return (
      <div>
        <h2>Select a language</h2>
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')}  />
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
      </div>
    );
  }
}

export default LanguageSelector;
