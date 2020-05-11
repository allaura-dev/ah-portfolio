
import React from 'react';

class EmailCopy extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  emailToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Email Copied to Clipboard' });
  };
}

export default EmailCopy;