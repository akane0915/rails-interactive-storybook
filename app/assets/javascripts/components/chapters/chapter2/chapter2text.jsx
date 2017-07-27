var Chapter2Text = React.createClass({

  render: function() {
    return (
      <div>

        <p className="chapter-text">
          Now, one morning, Mama <strong><em>{this.props.family_type}</em></strong> made <strong><em>{this.props.food}</em></strong> for breakfast. The <strong><em>{this.props.food}</em></strong> was very hot. Papa <strong><em>{this.props.family_type}</em></strong> said, "Why don’t we take a walk in the forest while the <strong><em>{this.props.food}</em></strong> is cooling down." So, they went for a walk.
        </p>

        <p className="chapter-text">
          Along came a little girl, whose name was <strong><em>{this.props.girl_name}</em></strong>, walking in the forest. She saw the <strong><em>{this.props.family_type}</em></strong>’s <strong><em>{this.props.house_type}</em></strong> and was very curious about who might live there. So, she knocked on the door, but nobody answered. She smelled the <strong><em>{this.props.food}</em></strong> and decided to go inside.
        </p>
      </div>
    )
  }
});
