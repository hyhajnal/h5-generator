import React, { Component } from 'react';
import Sortable from 'sortablejs';

class SortableTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Sortable.create(this.foo, {
      group: 'foo',
      animation: 100,
    });

    Sortable.create(this.bar, {
      group: 'bar',
      animation: 100,
    });

    Sortable.create(this.qux, {
      group: {
        name: 'qux',
        put: ['foo', 'bar'],
      },
      animation: 100,
    });
  }

  render() {
    return (
      <div className="drag-container">
        <ul id="foo" ref={ref => this.foo = ref}>
          <li>foo 1</li>
          <li>foo 2</li>
          <li>foo 3</li>
        </ul>

        <ul id="bar" ref={ref => this.bar = ref}>
          <li>bar 1</li>
          <li>bar 2</li>
          <li>bar 3</li>
        </ul>

        <ul id="qux" ref={ref => this.qux = ref}>
          <li>qux 1</li>
        </ul>
      </div>
    );
  }


}

export default SortableTest;
