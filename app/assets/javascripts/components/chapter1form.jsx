var Chapter1Form = React.createClass({

  render: function() {
    return (
      <div>

      <form onSubmit={this.updateChapterOneFieldsSubmit}>
        <h3>Choose your landscape</h3>

        <select name="book[landscape_type]" value={this.props.landscape_type}
        onChange={this.handleLandscapeChange}>

          <option value=""></option>
          <option value="forest">Forest</option>
          <option value="tundra">Tundra</option>
          <option value="grassland">Grassland</option>
          <option value="desert">Desert</option>
          <option value="ocean">Ocean</option>
        </select>

        <h3>Then pick an animal</h3>

        <select name="book[family_type]" value={this.props.family_type}
        onChange={this.handleFamilyChange}>

          <option value=""></option>
          <option value="bear">Bear</option>
          <option value="puffin">Puffin</option>
          <option value="banana slug">Banana Slug</option>
          <option value="donkey">Donkey</option>
        </select>

        <h3>Now Click Save!</h3>

        <input type="submit" value="Save" className='btn btn-primary' />
      </form>

      </div>
    )
  }
});
