var Chapter2Text = React.createClass({

  render: function() {
    return (
      <div>

        <p>
          Now, one morning, Mama <strong><em>{this.props.family_type}</em></strong> made <strong><em>{this.props.food}</em></strong> for breakfast. The <strong><em>{this.props.food}</em></strong> was very hot. Papa <strong><em>{this.props.family_type}</em></strong> said, "Why don’t we take a walk in the forest while the <strong><em>{this.props.food}</em></strong> is cooling down." So, they went for a walk.
        </p>
      </div>
    )
  }
});
