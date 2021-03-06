var Chapter4 = React.createClass({

  getInitialState: function(){
    return {
      bed_type: this.props.book.bed_type,
      family_type: this.props.book.family_type,
      food: this.props.book.food,
      landscape_type: this.props.landscape_type,
    }
  },

  updateChapterFourFieldsSubmit: function(e){

    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {
        book: {
          bed_type: this.state.bed_type,
        },
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });

    if (this.state.bed_type == "bed") {
      $('.bed_type_image').hide();
      $('#bed').fadeIn();
    } else if (this.state.bed_type == "hammock") {
      $('.bed_type_image').hide();
      $('#hammock').fadeIn();
    } else if (this.state.bed_type == "yoga mat") {
      $('.bed_type_image').hide();
      $('#yoga-mat').fadeIn();
    }
  },

  handleBedTypeChange: function(e){
    this.setState({bed_type: e.target.value});
    $('#chapter4-button').addClass('animated infinite rubberBand');
  },

  stopSaveButtonAnimation: function(){
    $('#chapter4-button').removeClass('animated infinite rubberBand');
  },

  render: function() {

      return (
        <div>
          <LandscapeType landscape_type = {this.state.landscape_type}/>

          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterFourFieldsSubmit} className="center-text">
            <h1>Select something you sleep on!</h1>

            <select name="book[bed_type]" value={this.state.bed_type}
            onChange={this.handleBedTypeChange} className="form-select">

              <option value=""></option>
              <option value="bed">Bed</option>
              <option value="hammock">Hammock</option>
              <option value="yoga mat">Yoga mat</option>
            </select>

            <h1>Now Click Save!</h1>

            <input onClick={this.stopSaveButtonAnimation} type="submit" value="Save" id="chapter4-button" className='btn btn-default save-button' />
          </form>

          <div className="center-text">
            <Chapter4Images />
          </div>

          <Chapter4Text bed_type = {this.state.bed_type} family_type = {this.state.family_type} food = {this.state.food}/>

        </div>
      )
  }
});
