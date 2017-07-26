var Chapter1Form = React.createClass({



  handleLandscapeChange: function(e){
    this.setState({landscape_type: e.target.value});
  },

  handleFamilyChange: function(e){
    this.setState({family_type: e.target.value});
    $('#chapter1-button').addClass('animated rubberBand');
  },

  render: function() {
    return (
      <div>

        <form onSubmit={this.updateChapterOneFieldsSubmit}>
          <h3>Choose your landscape</h3>

          <select name="book[landscape_type]" value={this.landscape_type}
          onChange={this.handleLandscapeChange}>

            <option value=""></option>
            <option value="forest">Forest</option>
            <option value="tundra">Tundra</option>
            <option value="grassland">Grassland</option>
            <option value="desert">Desert</option>
            <option value="ocean">Ocean</option>
          </select>

          <h3>Then pick an animal</h3>

          <select name="book[family_type]" value={this.family_type}
          onChange={this.handleFamilyChange}>

            <option value=""></option>
            <option value="bear">Bear</option>
            <option value="puffin">Puffin</option>
            <option value="banana slug">Banana Slug</option>
            <option value="donkey">Donkey</option>
          </select>

          <h3>Now Click Save!</h3>

          <input type="submit" value="Save" id= "chapter1-button" className='btn btn-primary' />
        </form>

      </div>
    )
  }
});
