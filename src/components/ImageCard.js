import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rowSpans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    console.log(this.imageRef);
    const height = this.imageRef.current.clientHeight;
    const rowSpans = Math.ceil(height / 10);
    this.setState({ rowSpans });
  };
  render() {
    const { description, urls } = this.props.image;

    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.rowSpans}`,
        }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
