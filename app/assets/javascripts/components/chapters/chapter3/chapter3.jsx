var Chapter3 = React.createClass({

  getInitialState: function(){
    return {
      food: this.props.book.food,
      family_type: this.props.book.family_type,
      seat_type: this.props.book.seat_type,
      landscape_type: this.props.landscape_type,
    }
  },

  updateChapterThreeFieldsSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {
        book: {
          seat_type: this.state.seat_type
        },
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });

    if (this.state.seat_type == "chair") {
      $('.seat_type_image').hide();
      $('#chair').fadeIn();
    } else if (this.state.seat_type == "bike seat") {
      $('.seat_type_image').hide();
      $('#bike-seat').fadeIn();
    } else if (this.state.seat_type == "toilet") {
      $('.seat_type_image').hide();
      $('#toilet').fadeIn();
    } else if (this.state.seat_type == "saddle") {
      $('.seat_type_image').hide();
      $('#saddle').fadeIn();
    }

  },


  handleSeatTypeChange: function(e){
    this.setState({seat_type: e.target.value});
    $('#chapter3-button').addClass('animated rubberBand');
  },

  render: function() {
      return (
        <div>
          <LandscapeType landscape_type = {this.state.landscape_type}/>

          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterThreeFieldsSubmit} className="center-text">
            <h1>Choose your favorite type of seat!</h1>

            <select name="book[seat_type]" value={this.state.seat_type}
            onChange={this.handleSeatTypeChange} className="form-select">
              <option value=""></option>
              <option value="chair">Chair</option>
              <option value="bike seat">Bike Seat</option>
              <option value="toilet">Toilet</option>
              <option value="saddle">Saddle</option>
            </select>

            <h1>Then Click Save!</h1>

            <input type="submit" value="Save" id="chapter3-button" className='btn btn-default save-button' />
          </form>

          <div className="center-text">
            <Chapter3Images />
          </div>

          <Chapter3Text food = {this.state.food} family_type = {this.state.family_type} seat_type = {this.state.seat_type} />

        </div>

      )
  }
});
