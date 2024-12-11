const mainContainer = document.querySelector('#root');

function customRender(reactElement,mainContainer){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
    */

   //using a loop
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(let prop in reactElement.props){
        if(prop==='childre')continue;
        domElement.setAttribute(prop,reactElement.props.prop)
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click me to visit Google"
}
customRender(reactElement,mainContainer)
