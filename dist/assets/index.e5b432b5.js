var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,s,o)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,l=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&r(e,s,t[s]);if(o)for(var s of o(t))n.call(t,s)&&r(e,s,t[s]);return e};import{r as i,R as c,a as m,b as p}from"./vendor.fa8c0111.js";class d extends i.exports.Component{getColor(){const{votes:e}=this.props;return e>=15?"#4CAF50":e>=12?"#8BC34A":e>=9?"#CDDC39":e>=6?"#FFEB3B":e>=3?"#FFC107":e>=0?"#FF9800":"#f44336"}getEmoji(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}render(){return c.createElement("div",{className:"Joke"},c.createElement("div",{className:"Joke-buttons"},c.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upvote}),c.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),c.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downvote})),c.createElement("div",{className:"Joke-text"},this.props.text),c.createElement("div",{className:"Joke-smiley"},c.createElement("i",{className:this.getEmoji()})))}}const h={headers:{Accept:"application/json"}};class k extends i.exports.Component{constructor(e){super(e),this.state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},this.seenJokes=new Set(this.state.jokes.map((e=>e.text))),console.log(this.seenJokes),this.handleVote=this.handleVote.bind(this),this.handleClick=this.handleClick.bind(this)}async componentDidMount(){0===this.state.jokes.length&&this.getJokes()}async getJokes(){try{let e=[];for(;e.length<this.props.numJokesToGet;){let t=await m.get("https://icanhazdadjoke.com/",h),s=t.data.joke;this.seenJokes.has(s)?(console.log("Duplicate found!"),console.log(t.data.joke)):(this.seenJokes.add(s),e.push({text:t.data.joke,id:t.data.id,votes:0}))}this.setState((t=>({loading:!1,jokes:[...t.jokes,...e]})),(()=>{window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes))}))}catch(e){alert(e),console.log(e),this.setState({loading:!1})}}handleClick(){this.setState({loading:!0},(()=>{this.getJokes()}))}handleVote(e,o){this.setState((a=>({jokes:a.jokes.map((a=>{return a.id===e?(n=l({},a),r={votes:a.votes+o},t(n,s(r))):l({},a);var n,r}))})),(()=>{window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes))}))}render(){return this.state.loading?c.createElement("div",{className:"JokesList-spinner"},c.createElement("i",{className:"far fa-8x fa-laugh fa-spin"}),c.createElement("h1",{className:"JokesList-title"},"Loading... ")):c.createElement("div",{className:"JokesList"},c.createElement("div",{className:"JokesList-sidebar"},c.createElement("h1",{className:"JokesList-title"},c.createElement("span",null,"Dad")," Jokes"),c.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"}),c.createElement("button",{className:"JokesList-getmore",onClick:this.handleClick},"Fetch Jokes")),c.createElement("div",{className:"JokesList-jokes"},this.state.jokes.map((e=>c.createElement(d,{key:e.id,text:e.text,votes:e.votes,upvote:()=>this.handleVote(e.id,1),downvote:()=>this.handleVote(e.id,-1)}))).sort(((e,t)=>t.props.votes-e.props.votes))))}}k.defaultProps={numJokesToGet:10};class g extends i.exports.Component{render(){return c.createElement("div",{className:"App"},c.createElement(k,null))}}p.render(c.createElement(c.StrictMode,null,c.createElement(g,null)),document.getElementById("root"));