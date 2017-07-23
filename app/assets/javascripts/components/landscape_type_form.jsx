var LandscapeTypeForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <select>
            <option value=""></option>
            <option value="forest">Forest</option>
            <option value="tundra">Tundra</option>
            <option value="grassland">Grassland</option>
            <option value="desert">Desert</option>
            <option value="ocean">Ocean</option>
          </select>
          <input type='submit' value='Submit Landscape' />
        </form>
      </div>
    )
  }
});
