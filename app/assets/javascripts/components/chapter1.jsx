var Chapter1 = React.createClass({



  render: function() {
      return (
        <div>
          <h3>{this.props.chapter.title}</h3>

          <p> Once upon a time, deep in a </p>

          <LandscapeTypeForm
            book = {this.props.book}
          />

          <p>
            lived a {this.props.book.family_type} family.  There was a great  big Papa {this.props.book.family_type}, a medium sized Mama {this.props.book.family_type}, and a wee little Baby {this.props.book.family_type}.
          </p>
        </div>
      )
  }
});
