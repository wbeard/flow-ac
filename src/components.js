// @flow
import React, { Component } from 'react';

// Subclassing
class ComponentA extends Component {
  props: {
    text: string
  };

  render(): React.Element<> {
    return (
      <div>
        { this.props.text }
      </div>
    );
  }
}

// Stateless functional components
function ComponentB(props: { text: string }): React.Element<> {
  return <div>{ props.text }</div>;
}

const compA = <ComponentA text={ 1 } />;
const compB = <ComponentB text={ 2 } />;
