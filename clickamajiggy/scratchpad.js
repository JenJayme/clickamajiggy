        /* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Navbar.Brand href="#home" to="/">
                Clickamajiggy
            </Navbar.Brand>
            <div className="center">
                <h1>Click an image to begin!</h1>
            </div>
            <div className="right">
                Score: 0 | Top Score: 0
            </div>
        </nav> */


        for (var i = 0; i < Paintings.length; i++) {
            console.log("artUrl")
            return (
                <div className="artBlock">
                    <h5>Art Block</h5>
                <img src="./public/art/flaming-june-ru.jpg" alt="name"></img>
                </div>
            )
        })
    


        <div>
        <h4>Art Block</h4>
    <img src={Paintings.artUrl} />
    </div>


render() {
    const numbers = ['one', 'two', 'three'];
    const items = [];
    for (let i = 0; i < numbers.length; i++) {
      items.push(<li key={index}>{value}</li>);
    }
    return (
      <div>
        {items}
      </div>
    );
  }