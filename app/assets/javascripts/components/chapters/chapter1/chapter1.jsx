var Chapter1 = React.createClass({

  getInitialState: function(){
    return {
      landscape_type: this.props.book.landscape_type,
      family_type: this.props.book.family_type,
    }
  },

  updateChapterOneFieldsSubmit: function(e){

    e.preventDefault();
    $.ajax({
      url: "/books/1",
      dataType: 'json',
      type: 'PATCH',
      data: {
        book: {
          landscape_type: this.state.landscape_type,
          family_type: this.state.family_type,
        },
      },
      success: function(book) {
        this.props.parentUpdateBook(book);
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occurred");
      }
    });

    $('body').css("text-shadow", "3px 4px 2px #bdbdbd");
    if (this.state.landscape_type == "forest") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4316/35321253134_bf1569ce4a_o.jpg') no-repeat").css("background-size", "cover").css("color", "white");
      $('body select').css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #000");
      $('a.chapter-navigation-link').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else if (this.state.landscape_type == "tundra") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4329/35321271654_9ef44b5c1c_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else if (this.state.landscape_type == "grassland") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4292/35321258984_4ff3ee7f0f_o.jpg ') no-repeat").css("background-size", "cover").css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else if (this.state.landscape_type == "desert") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4308/35992305862_80be18696e_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else if (this.state.landscape_type == "ocean") {
      $('body').css("background", "url('https://farm5.staticflickr.com/4326/35321265694_5c8551247b_o.jpg') no-repeat").css("background-size", "cover").css("color", "white");
      $('body select').css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #000");
      $('a.chapter-navigation-link').css("text-shadow", "3px 4px 2px #bdbdbd");
    } else {
      $('body').css("background", "url('https://farm5.staticflickr.com/4328/36048567901_6b9ce897e4_o.jpg') no-repeat").css("background-size", "cover").css("color", "black");
      $('body').css("text-shadow", "3px 4px 2px #bdbdbd");
    }

    if (this.state.family_type == "bear") {
      $('.family_type_image').hide();
      $('#bear').fadeIn();
    } else if (this.state.family_type == "puffin") {
      $('.family_type_image').hide();
      $('#puffin').fadeIn();
    } else if (this.state.family_type == "banana slug") {
      $('.family_type_image').hide();
      $('#banana-slug').fadeIn();
    } else if (this.state.family_type == "donkey") {
      $('.family_type_image').hide();
      $('#donkey').fadeIn();
    }
  },

  handleLandscapeChange: function(e){
    this.setState({landscape_type: e.target.value});
  },

  handleFamilyChange: function(e){
    this.setState({family_type: e.target.value});
    $('#chapter1-button').addClass('animated infinite rubberBand');
  },

  stopSaveButtonAnimation: function(){
    $('#chapter1-button').removeClass('animated infinite rubberBand');
  },

  render: function() {

      return (
        <div>
          <LandscapeType landscape_type = {this.state.landscape_type}/>

          <h1>{this.props.chapter.title}</h1>

          <form onSubmit={this.updateChapterOneFieldsSubmit} className="center-text">
            <h1>Choose your landscape</h1>

            <select name="book[landscape_type]" value={this.state.landscape_type}
            onChange={this.handleLandscapeChange} className="form-select">

              <option value=""></option>
              <option value="forest">Forest</option>
              <option value="tundra">Tundra</option>
              <option value="grassland">Grassland</option>
              <option value="desert">Desert</option>
              <option value="ocean">Ocean</option>
            </select>

            <h1>Then pick an animal</h1>

            <select name="book[family_type]" value={this.state.family_type}
            onChange={this.handleFamilyChange} className="form-select">

              <option value=""></option>
              <option value="bear">Bear</option>
              <option value="puffin">Puffin</option>
              <option value="banana slug">Banana Slug</option>
              <option value="donkey">Donkey</option>
            </select>

            <h1>Now Click Save!</h1>

            <input onClick={this.stopSaveButtonAnimation} type="submit" value="Save" id="chapter1-button" className='btn btn-default save-button' />
          </form>

          <div className="center-text">
            <Chapter1Images />
          </div>

          <Chapter1Text landscape_type = {this.state.landscape_type} family_type = {this.state.family_type} />

        </div>

      )
  }
});
