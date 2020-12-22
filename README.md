# Learn Basic ReactJS

Movie app Tutoiral
by Nomad Coder

View : https://urim-snu.github.io/movie_app_2020_shin/

#2.0
react aplication only renders one component.
여러 개 쓰러면 하나의 component 안에 다른 component 집어넣는 방식.

#2.2 Dynamic Component Generation
array.map(elementName => {
implement function here
return values make new array
})

#2.3 map recap
unique "key" prop

#2.4 Protection with PropTypes
Food.propTypes = {name.string.isRequired}

#3.0 Class Components and State
class App extends React.Components{
render(){

    } // 자동으로 실행되는 함수

}

state는 Object이다, 변하는 data를 담는다.
render 함수 내에서 state 사용 {this.state.XXX}
<button onClick={this.add}>

#3.1 All you need to know about State
state를 변경하고자 할때 react가 render function를 다시 호출하게 해야 한다.
-> this.setState( current => {})
setState를 호출하면 새로운 state와 함께 render function 호출한다.

#3.2 Component Life Cycle
Mounting - Constructor() : in JS, before render - render() - componentDidMount() : after render
Updating (When State Changed by setState) - render - componentDidUpdate() : after render
Unmounting - componentWillUnmount()

#3.3 Planning the Movie Component
미래에 쓸 state를 미리 선언하는 것은 필수가 아니다.

#4.0 Fetching Movies from API
axios : fetch 위에 있는 작은 layer

#5.1 Are we done?
react hook -> no need to use class components
