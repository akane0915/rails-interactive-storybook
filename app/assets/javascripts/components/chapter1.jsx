var Chapter1 = React.createClass({

  getInitialState: function(){
    return {
      landscape_type: this.props.book.landscape_type,
    }
  },

  updateLandscapeSubmit: function(e){
    e.preventDefault();

    console.log("Landscape type updated to: " + this.state.landscape_type);

    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {book: {landscape_type: this.state.landscape_type}},

      success: function(book) {

       this.props.parentUpdateBook(book);

      }.bind(this),

      error: function(response, status, err) {

       console.log("An error occurred");
      }
    });



  },

  handleLandscapeChange: function(e){
    this.setState({landscape_type: e.target.value});
  },

  render: function() {
      return (
        <div>
          <h3>landscape_type:{this.props.book.landscape_type}</h3>
          <h3>{this.props.chapter.title}</h3>

          <form onSubmit={this.updateLandscapeSubmit}>
            <input
              name="book[landscape_type]"
              type="string"
              placeholder="Landscape type"
              value={this.state.landscape_type}
              onChange={this.handleLandscapeChange}
              className="string form-control"
            />

            <input type="submit" value="Save" className='btn btn-primary' />
          </form>


          <p>
            Once upon a time, deep in a {this.state.landscape_type} lived a {this.props.book.family_type} family.  There was a great  big Papa {this.props.book.family_type}, a medium sized Mama {this.props.book.family_type}, and a wee little Baby {this.props.book.family_type}.
          </p>
        </div>
      )
  }
});
