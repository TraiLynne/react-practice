class MyFirstCompoment extends React.Component {
  render() {
    return (
      <div>
        <h1 className="class-highlight">
					Hello world from a component!
				</h1>
      </div>
    );
  }
}

class MyFruitList extends React.Component {
  render() {
    const orange = "Orange";
    const apple = "Apple";
    const banana = "Banana";

    const fruitImg = "images/fruit.jpg";
    const image = <img src={fruitImg} />;

    var randomFruits = ["Jackfruit", "Mango", "Strawberry", "Grapes", "Peach"];

    var randomFruit = randomFruits[Math.floor(Math.random() * randomFruits.length)];

    const fruitList = (
      <div>
        <div key="el-key">
					Some of my favorite fruits
				</div>
        <ul>
          <li key="O-key">{orange}</li>
          <li key="A-key">{apple}</li>
          <li key="B-key">{banana}</li>
          <li key="N-key" className="my-fruit">
            {randomFruit}
          </li>
        </ul>
        {image}
      </div>
    );

    return fruitList;
  }
}

const components = {
	myFirstCompoment: document.getElementById('my-first-component'),
	myFruitList: document.getElementById("my-fruit-list") 
}

ReactDOM.render(
  <MyFirstCompoment />,
  components.myFirstCompoment
);

function on_tick() {
  ReactDOM.render(
		<MyFruitList />, 
		components.myFruitList
	);
}

setInterval(on_tick, 2000);
