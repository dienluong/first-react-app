import React from 'react';

export default class File extends React.Component {
  render() {
    return (
      <p>
        <code>
          Name: { this.props.file.name } Size: { this.props.file.size } Owner: { this.props.file.owner }
        </code>
      </p>
    );
  }
}
