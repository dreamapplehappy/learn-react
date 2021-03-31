// import React from 'react'
//
// const ThemeContext = React.createContext('light')
// ThemeContext.displayName = "Theme"
// const LocaleContext = React.createContext('zh-CN')
//
// const ctxVal = {
//   val: 'sth',
//   cb: () => {}
// }
//
// const TestContext = React.createContext(ctxVal)
//
// class ThemedButton extends React.Component {
//   static contextType = TestContext
//   constructor(props) {
//     super(props);
//     this.state = {
//       ctx: {
//         val: 'xxx',
//         cb: this.handleCb
//       }
//     }
//   }
//
//   handleCb = () => {
//     this.setState((state) => {
//       const { ctx } = state;
//       ctx.val = `${+new Date()}`
//       return ({
//         ctx
//       })
//     })
//   }
//
//   render() {
//     return (
//       <TestContext.Provider value={this.state.ctx}>
//         <TestContext.Consumer>
//           {({val, cb}) => {
//             return <button onClick={cb}>{val}0</button>
//           }}
//         </TestContext.Consumer>
//       </TestContext.Provider>
//     )
//   }
// }
//
// const ContextDemo = (props) => (
//   <div>
//     <ThemeContext.Provider value={"dark"}>
//       <div onClick={props.onClick} style={{backgroundColor: props.theme.background, color: props.theme.foreground}}>{props.theme.background}</div>
//       <ThemedButton/>
//       <ThemeContext.Consumer>
//         {(ctx) => (<span>{ctx}</span>)}
//       </ThemeContext.Consumer>
//     </ThemeContext.Provider>
//   </div>
// )
//
// const THEME = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222',
//   },
// }
//
// class APP extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: THEME.light
//     }
//   }
//
//   changeTheme = () => {
//     const {theme} = this.state;
//     this.setState((state) => ({
//       theme: state.theme === THEME.light ? THEME.dark : THEME.light
//     }))
//   }
//
//   render() {
//     return (
//       <>
//         <button onClick={this.changeTheme}>change</button>
//         <ContextDemo onClick={this.changeTheme} theme={this.state.theme}></ContextDemo>
//       </>
//     )
//   }
// }
//
// export default APP;
